# Deploying to AWS CloudFront + S3

The live site at **https://plus-artificial-intelligence.org/** is a fully static
site served from a private S3 bucket through CloudFront, deployed automatically
by GitHub Actions on every push to `main` that touches `site/`.

This guide covers the **one-time manual AWS setup** (console or CLI, your
choice) and the GitHub wiring. The reusable pieces are ready to paste from
[`infra/`](../infra/):

| File | Purpose |
| --- | --- |
| `infra/iam-oidc-trust-policy.json` | Trust policy for the GitHub Actions deploy role (OIDC, no long-lived keys) |
| `infra/iam-deploy-policy.json` | Least-privilege inline policy: sync `site/`, invalidate CloudFront |
| `infra/cloudfront-www-redirect.js` | CloudFront Function: 301 `www.` → apex canonical host |

## Architecture

```
GitHub (main branch)
   │  .github/workflows/deploy.yml
   │  validate → deploy (OIDC, no AWS keys)
   ▼
IAM role (github-deploy)            Route 53
   │  s3:PutObject etc.             ├─ A/AAAA ALIAS  plus-artificial-intelligence.org    → CloudFront
   ▼                                └─ A/AAAA ALIAS  www.plus-artificial-intelligence.org → CloudFront
S3 bucket: plus-artificial-intelligence.org (private, versioned)
   ▲  Origin Access Control (OAC) only — no public access, no static website hosting
CloudFront distribution
   ├─ HTTPS only (ACM certificate, us-east-1, apex + www)
   ├─ www → apex redirect (CloudFront Function, viewer-request)
   ├─ 404 → /404.html (custom error response, HTTP 404)
   ├─ security response headers (managed policy)
   └─ cache: TTLs below, invalidated on every deploy
```

## 0. Prerequisites

- An AWS account with permission to create S3 buckets, ACM certificates,
  CloudFront distributions, IAM roles, and Route 53 records.
- The domain `plus-artificial-intelligence.org` — ideally in a Route 53 hosted
  zone in the same account (DNS validation of the certificate is then
  automatic; if the domain lives at another registrar, create a public hosted
  zone and point the registrar's NS records at it, or validate by CNAME).
- Repository access to GitHub settings (create an environment and variables).

## 1. S3 bucket

Create a **private** bucket in your preferred region (CloudFront is global and
region-agnostic for origins):

| Setting | Value |
| --- | --- |
| Name | `plus-artificial-intelligence.org` (any unique name works; remember it for GitHub vars) |
| Block all public access | **On** |
| Static website hosting | **Off** — CloudFront OAC reads the private bucket directly |
| Bucket versioning | **Enable** (cheap insurance; add a lifecycle rule to expire old non-current versions after 90 days if you like) |

Do not add a public bucket policy. The OAC in step 3 updates the policy for you.

## 2. ACM certificate (region **us-east-1**)

CloudFront only serves certificates requested in `us-east-1`.

1. ACM → Request certificate → **Public**, fully qualified names:
   `plus-artificial-intelligence.org` and `www.plus-artificial-intelligence.org`.
2. Validation method: **DNS**. In Route 53, ACM offers one-click record
   creation; at another DNS provider, create the two CNAME records it shows.
3. Wait for **Issued** and note the certificate ARN.

## 3. CloudFront distribution

Create distribution:

| Section | Setting | Value |
| --- | --- | --- |
| Origin | Origin domain | the S3 bucket from step 1 |
| | Origin access | **Origin access control settings** → Create new OAC → Signing behavior: **Sign requests** → Create |
| | (S3 shows a "copy policy" banner) | Click **Copy policy**, then attach it to the bucket's Bucket policy in S3 |
| Default cache behavior | Viewer protocol policy | **Redirect HTTP to HTTPS** |
| | Allowed methods | GET, HEAD |
| | Cache policy | **CachingOptimized** |
| | Origin request policy | **CORS-S3Origin** (only if you ever add CORS; otherwise **AllViewerExceptHostHeader**) |
| | Response headers policy | **SecurityHeadersPolicy** (managed) — sets X-XSS-Protection, nosniff, frame-options, referrer, etc. |
| | Compress objects | **On** (Brotli) |
| Settings | Alternate domain names (CNAMEs) | `plus-artificial-intelligence.org`, `www.plus-artificial-intelligence.org` |
| | Custom SSL certificate | the ACM certificate from step 2 |
| | Default root object | `index.html` |
| | Standard logging | optional but recommended (S3 log bucket) |
| | HTTP/3 | on by default; leave enabled |
| | Price class | your choice — "North America and Europe" is cheapest while global |

Error pages — add one custom error response:

| HTTP error code | Response page path | HTTP response code |
| --- | --- | --- |
| 404 | `/404.html` | 404 |

(Cache the 404 briefly — TTL 10–300s — so typos stay cheap to serve.)

### www → apex redirect function

Create a CloudFront Function from `infra/cloudfront-www-redirect.js`
(CloudFront → Functions → Create function → paste → **Publish**), then
**Associate** it with the distribution on the **Viewer Request** event. This
makes `www` one permanent 301 hop to the apex host.

## 4. Route 53

For each hosted zone (or the single zone):

| Record | Type | Value | Alias |
| --- | --- | --- | --- |
| `plus-artificial-intelligence.org` | A | the CloudFront distribution | **Yes** |
| `plus-artificial-intelligence.org` | AAAA | the CloudFront distribution | **Yes** |
| `www.plus-artificial-intelligence.org` | A | the CloudFront distribution | **Yes** |
| `www.plus-artificial-intelligence.org` | AAAA | the CloudFront distribution | **Yes** |

If the domain's NS records don't already point at Route 53, copy the hosted
zone's NS values into your registrar's configuration.

## 5. GitHub → AWS (OIDC — no access keys)

GitHub Actions authenticates with a short-lived token; nothing secret is
stored anywhere.

1. **OIDC provider** (once per account):
   ```bash
   aws iam create-open-id-connect-provider \
     --url https://token.actions.githubusercontent.com \
     --client-id-list sts.amazonaws.com \
     --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
   ```
2. **Role** `github-plus-ai-deploy`:
   - Trusted entity type: **Web identity** → provider
     `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`,
     GitHub organisation/user + repo: `plus-artificial-intelligence`, branch `main`.
     (Or paste `infra/iam-oidc-trust-policy.json` after replacing `ACCOUNT_ID`
     and `OWNER`.)
   - Attach the inline policy `infra/iam-deploy-policy.json` (replace
     `PLUS_AI_BUCKET`, `ACCOUNT_ID`, `PLUS_AI_DISTRIBUTION_ID`).
3. Note the role ARN.

## 6. GitHub environment and variables

Settings → Environments → **production** (protect with required reviewers if
you like) → Environment variables:

| Variable | Value |
| --- | --- |
| `AWS_ROLE_ARN` | the role ARN from step 5 |
| `AWS_REGION` | the S3 bucket's region (e.g. `us-east-1`) |
| `S3_BUCKET_NAME` | the bucket name from step 1 |
| `CLOUDFRONT_DISTRIBUTION_ID` | the distribution ID from step 3 |

No secrets are required — OIDC carries the credentials.

## 7. First deploy

Push to `main` (any change under `site/` triggers the workflow), or run it
manually from the Actions tab. The pipeline:

1. **validate** — translation data check, render smoke test for all 40
   languages, local link check, sitemap freshness.
2. **deploy** — `aws s3 sync site/ s3://… --delete --exact-timestamps`, then a
   CloudFront invalidation for `/*`.

Manual deploy (for one-off pushes without GitHub Actions):

```bash
aws s3 sync site/ s3://plus-artificial-intelligence.org --delete --exact-timestamps
aws cloudfront create-invalidation \
  --distribution-id EXXXXXXXXXXXXX --paths "/*"
```

Verify:

- `https://plus-artificial-intelligence.org/` renders the spec page.
- `https://www.plus-artificial-intelligence.org/` → 301 → apex.
- `https://plus-artificial-intelligence.org/nonexistent` → branded 404 page
  with HTTP 404.
- Response headers include `strict-transport-security` and
  `x-content-type-options: nosniff`.
- `https://plus-artificial-intelligence.org/sitemap.xml` and `/robots.txt`
  resolve.

## 8. Day-two notes

- **Cache behaviour.** `CachingOptimized` defaults: TTL 24h, min 1s, max 1y.
  Every deploy invalidates `/*`, so stale content is not a concern at this
  scale. If you start updating individual pages frequently, narrow the
  invalidation path to the changed files.
- **Cache busting.** All assets are immutable file names (no hashing needed);
  `--delete` keeps the bucket an exact mirror of `site/`.
- **Logging & monitoring.** Enable CloudFront standard logs and a CloudWatch
  alarm on `5xxErrorRate` and `4xxErrorRate` if you want operational signal.
- **Security.** The bucket is private (OAC only), HTTPS is forced, the managed
  security-headers policy is attached. If you later add a Content-Security
  Policy, note the pages deliberately use inline scripts and Google Fonts —
  start from `script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com` and
  test heavily before tightening.
- **Cost.** CloudFront free tier + S3 standard is effectively free at this
  traffic level; the invalidation quota is far above one per deploy.
- **Recovery.** The bucket is versioned and the site is fully in git — any
  state is restorable by redeploying an older commit.
