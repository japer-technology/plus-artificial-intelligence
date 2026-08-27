# GitHub → AWS Publish: Step-by-Step Setup

This guide walks through configuring the GitHub side so the repository
publishes the site to the CloudFront + S3 stack. It assumes the AWS side is
already built — S3 bucket, CloudFront distribution with OAC, ACM certificate,
OIDC provider, and the IAM deploy role — per sections 1–5 of
[`DEPLOYMENT.md`](DEPLOYMENT.md).

The whole pipeline is keyless: GitHub Actions exchanges a short-lived OIDC
token for AWS credentials, so **no access keys or secrets are ever stored in
GitHub**.

## Checklist before you start

Have these five values ready (they come from the AWS setup):

| # | Value | From |
| --- | --- | --- |
| 1 | Repo is pushed to GitHub as `japer-technology/plus-artificial-intelligence` with default branch `main` | your repository |
| 2 | IAM role ARN, e.g. `arn:aws:iam::123456789012:role/github-plus-ai-deploy` | DEPLOYMENT.md §5 |
| 3 | S3 bucket name, e.g. `plus-artificial-intelligence.org` | DEPLOYMENT.md §1 |
| 4 | CloudFront distribution ID, e.g. `E1ABC2DEFGHIJK` | DEPLOYMENT.md §3 |
| 5 | AWS region of the bucket, e.g. `us-east-1` | DEPLOYMENT.md §1 |

The workflow file [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)
is already committed. It triggers two ways: automatically on push to `main`
that touches `site/**`, and manually via the **Run workflow** button. Don't
edit it unless you need to — but if you do, keep the `permissions:` block
(`id-token: write`) at the top: that is what enables the OIDC login.

## Step 1 — Confirm the workflow is visible

The manual **Run workflow** button only exists for workflows on the **default
branch**. If you don't see the workflow in the Actions tab, the workflow file
is not on `main`.

1. GitHub → **Actions** tab.
2. Check the left sidebar for **"Deploy site"**.

If it's missing: make sure `.github/workflows/deploy.yml` is committed and
pushed to `main`, then refresh the Actions tab.

## Step 2 — Create the `production` environment

The deploy job targets `environment: production`. You can skip this step and
use repository-level variables instead (step 3), but an explicit environment
is better: it gives you protection rules (required reviewers, wait timer) and
a clean separation for future secrets.

1. Open **Settings → Environments**.
2. Click **New environment**.
3. Name it exactly `production` (it must match the workflow file), then
   **Configure environment**.
4. Optional but recommended for a live site:
   - **Required reviewers** — add yourself (or the team); runs then pause for
     approval before deploying.
   - **Wait timer** — e.g. 1 minute, giving a window to cancel a bad run.
5. Leave deployment branches empty (the workflow's own `paths` filter already
   limits automatic deploys to `site/**` on `main`).

> If the environment does not exist, GitHub creates an empty one the first
> time the workflow runs — with **no variables**, so the deploy job would
> fail. Create it now and add the variables in step 3.

## Step 3 — Add the four variables

The workflow reads four repository variables — no secrets. They can live at
repository level or in the environment; **environment values override
repository values**. To keep everything in one place, put them in the
environment you just created:

1. Open **Settings → Environments → production**.
2. Under **Environment variables**, click **Add variable** and enter:

| Name | Value |
| --- | --- |
| `AWS_ROLE_ARN` | the IAM role ARN from the checklist (#2) |
| `AWS_REGION` | the bucket region (#5) |
| `S3_BUCKET_NAME` | the bucket name (#3) |
| `CLOUDFRONT_DISTRIBUTION_ID` | the distribution ID (#4) |

3. **Add variable** for each one.

If you prefer repository scope instead: **Settings → Secrets and variables →
Actions → Variables**, and add the same four there.

## Step 4 — Check the OIDC trust matches this repo

The trust policy in
[`infra/iam-oidc-trust-policy.json`](../infra/iam-oidc-trust-policy.json) pins
the GitHub subject to:

```
repo:OWNER/plus-artificial-intelligence:ref:refs/heads/main
```

In the AWS console (IAM → Roles → your deploy role → Trust relationships),
confirm that after replacing `OWNER` with your organisation/user:

- `OWNER` is `japer-technology` (or your GitHub username if the repo moved
  under a personal account),
- the repo name is exactly `plus-artificial-intelligence`,
- the branch is `main`,
- the audience is `sts.amazonaws.com`.

Because the subject is pinned to `main`, manual runs **must** select the
`main` branch in the Run workflow dialog. If you want to deploy from other
branches, widen the condition to `repo:OWNER/plus-artificial-intelligence:*`.

## Step 5 — Run the first publish manually

1. GitHub → **Actions → Deploy site**.
2. Click **Run workflow ▾**.
3. Branch: **main** (required — see step 4). Click **Run workflow**.
4. If you enabled required reviewers, approve the run when prompted.
5. Click the running workflow to watch it. You should see two jobs:
   - **validate** — translation checks, render smoke test for all 40
     languages, link check, sitemap/404 freshness.
   - **deploy** — `aws s3 sync site/ s3://… --delete --exact-timestamps`
     followed by a CloudFront invalidation of `/*`.
6. Both jobs green = published.

## Step 6 — Verify the live site

- Load `https://plus-artificial-intelligence.org/` (or the
  `*.cloudfront.net` URL) and check the page you changed is live — the
  invalidation in step 5 clears CloudFront's cache.
- Confirm `https://plus-artificial-intelligence.org/robots.txt` and
  `/sitemap.xml` resolve.
- Confirm a nonsense path shows the branded 404 page.
- Optional: in **AWS CloudWatch → CloudFront logs**, or the bucket listing,
  confirm new objects arrived.

## Step 7 — Everyday publishing

- **Normal publish**: commit your changes and push to `main`. Any change
  under `site/` (or to the workflow itself) deploys automatically after the
  validate job passes.
- **Manual re-publish** (e.g. to retry a failed deploy, or republish the same
  commit): Actions → Deploy site → Run workflow → `main`.
- **Remember**: a run deploys what is committed on GitHub, not your local
  working copy. Uncommitted changes are invisible to it — commit and push
  first.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| "Deploy site" doesn't appear in Actions | Workflow file not on the default branch | Commit/push `.github/workflows/deploy.yml` to `main` |
| Deploy fails with `Not authorized to perform sts:AssumeRoleWithWebIdentity` | OIDC trust policy doesn't match (repo owner/name/branch/audience) | Fix the trust policy per step 4; confirm the OIDC provider exists (DEPLOYMENT.md §5) |
| Deploy fails with `AccessDenied` on `PutObject` / `ListBucket` | Permissions policy placeholders not replaced, or wrong bucket | Check `infra/iam-deploy-policy.json` values against the real bucket ARN |
| Deploy fails with `NoSuchDistribution` on invalidation | Wrong distribution ID or wrong account | Check `CLOUDFRONT_DISTRIBUTION_ID`; CloudFront distributions are global, not regional |
| Variables appear empty in the run (`role-to-assume` blank) | Variables set at repo level but environment exists (or vice versa), or environment named differently | Confirm the `production` environment exists and variables are set there; environment values override repo values |
| Validate fails with "sitemap.xml or 404.html is stale" | Pages were added/renamed without regenerating | Run `node scripts/generate-sitemap.mjs` and `node scripts/build-404.mjs`, commit, re-run |
| Manual run on a non-`main` branch fails at credential step | Trust policy pinned to `refs/heads/main` | Run from `main`, or widen the policy per step 4 |
| Run sits at "Waiting for approval" | Required reviewers enabled on the environment | Approve in the run view (this is expected) |

## Related files

| File | Role |
| --- | --- |
| [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) | The pipeline: validate → deploy (OIDC, `production` environment) |
| [`infra/iam-oidc-trust-policy.json`](../infra/iam-oidc-trust-policy.json) | Trust policy for the deploy role |
| [`infra/iam-deploy-policy.json`](../infra/iam-deploy-policy.json) | Least-privilege permissions for sync + invalidation |
| [`DEPLOYMENT.md`](DEPLOYMENT.md) | Full stack runbook: AWS one-time setup (§1–5), manual workflow runs (§8) |
