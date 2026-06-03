import type { Lang } from '../types/index';

const SUPPORTED: Lang[] = ['en', 'it'];
const DEFAULT_LANG: Lang = 'en';

export function detectLanguage(acceptLanguage: string | null | undefined): Lang {
  if (!acceptLanguage) return DEFAULT_LANG;

  const ranked = acceptLanguage
    .split(',')
    .map(entry => {
      const [tag, ...params] = entry
        .trim()
        .split(';')
        .map(part => part.trim());
      const qParam = params.find(part => part.startsWith('q='));
      const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      return { base: tag.toLowerCase().split('-')[0], q: Number.isFinite(q) ? q : 0 };
    })
    .filter(({ base }) => base !== '')
    .sort((a, b) => b.q - a.q);

  const match = ranked.find(({ base }) => (SUPPORTED as string[]).includes(base));
  return (match?.base as Lang | undefined) ?? DEFAULT_LANG;
}

export function languageRedirect(request: Request, path: string): Response {
  const lang = detectLanguage(request.headers.get('accept-language'));
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${lang}${path}`,
      Vary: 'Accept-Language',
    },
  });
}
