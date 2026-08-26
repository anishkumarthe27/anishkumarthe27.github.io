import { normalizeSiteUrl } from '@/config/normalizeSiteUrl';

/** Canonical public origin. Override at build time with `VITE_SITE_URL`. */
export const siteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);

export { DEFAULT_SITE_URL, normalizeSiteUrl } from '@/config/normalizeSiteUrl';
