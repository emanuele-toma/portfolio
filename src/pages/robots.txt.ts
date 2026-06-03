export const prerender = true;

export function GET({ site }: { site?: URL }) {
  const sitemapUrl = site ? new URL('sitemap.xml', site).href : 'https://toma.gg/sitemap.xml';
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
