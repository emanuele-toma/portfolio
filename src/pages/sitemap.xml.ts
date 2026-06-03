import { getCollection } from 'astro:content';
import { bitSlug } from '../features/bits/slug';

export const prerender = true;

const staticPaths = ['/', '/bits', '/contact'];

function urlEntry(origin: string, path: string, lastmod?: string): string {
  const enHref = path === '/' ? `${origin}/en/` : `${origin}/en${path}`;
  const itHref = path === '/' ? `${origin}/it/` : `${origin}/it${path}`;
  const xDefault = `${origin}/`;

  const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>
    <loc>${enHref}</loc>${lastmodLine}
    <xhtml:link rel="alternate" hreflang="en" href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="it" href="${itHref}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>
  </url>
  <url>
    <loc>${itHref}</loc>${lastmodLine}
    <xhtml:link rel="alternate" hreflang="en" href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="it" href="${itHref}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>
  </url>`;
}

export async function GET({ site }: { site?: URL }) {
  const origin = site ? site.origin : 'https://toma.gg';
  const bits = await getCollection('bits');

  const staticEntries = staticPaths.map(p => urlEntry(origin, p)).join('\n');

  const bitEntries = bits
    .map(bit => {
      const slug = bitSlug(bit.id);
      const lastmod = bit.data.date instanceof Date ? bit.data.date.toISOString().slice(0, 10) : undefined;
      return urlEntry(origin, `/bits/${slug}`, lastmod);
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticEntries}
${bitEntries}
</urlset>`;

  return new Response(xml.trim(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
