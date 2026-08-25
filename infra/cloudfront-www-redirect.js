/**
 * CloudFront Function — viewer-request: redirect www → apex.
 *
 * Attach this function to the CloudFront distribution's viewer-request event
 * so https://www.plus-artificial-intelligence.org/... permanently redirects
 * to https://plus-artificial-intelligence.org/... (301, one canonical host).
 *
 * Console path: CloudFront → Functions → Create function → paste → Publish →
 * Associate with the distribution (event type: Viewer Request).
 */
function handler(event) {
  var request = event.request;
  var host = (request.headers.host && request.headers.host.value) || "";
  host = host.toLowerCase();

  if (host === "www.plus-artificial-intelligence.org") {
    var location =
      "https://plus-artificial-intelligence.org" +
      request.uri +
      (request.querystring && Object.keys(request.querystring).length
        ? "?" + request.querystring
        : "");
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: location } },
    };
  }

  return request;
}
