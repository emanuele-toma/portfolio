import { defineMiddleware } from 'astro:middleware';
import { languageRedirect } from './lib/detect-language';

const ROOT_PATHS = new Set(['/', '/bits', '/contact']);

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (ROOT_PATHS.has(pathname)) {
    return languageRedirect(context.request, pathname === '/' ? '/' : pathname);
  }
  return next();
});
