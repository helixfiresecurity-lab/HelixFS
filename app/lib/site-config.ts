/** Canonical site URL for sitemap/robots. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.helixfireandsecurity.co.uk"
).replace(/\/$/, "");
