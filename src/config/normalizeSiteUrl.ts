/** Default origin while the site is served from the GitHub Pages user site. */
export const DEFAULT_SITE_URL = 'https://anishkumarthe27.github.io';

/**
 * Public origin used for canonical and Open Graph URLs.
 * Empty input keeps the GitHub Pages user-site default.
 * A custom domain later is the same shape: https origin, no path.
 */
export function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = (raw ?? '').trim();

  if (trimmed === '') {
    return DEFAULT_SITE_URL;
  }

  let url: URL;

  try {
    url = new URL(trimmed);
  } catch {
    throw new Error(
      `VITE_SITE_URL must be an absolute https origin with no path. Received: ${trimmed}`,
    );
  }

  if (url.protocol !== 'https:') {
    throw new Error(`VITE_SITE_URL must use https. Received protocol: ${url.protocol}`);
  }

  if (url.username !== '' || url.password !== '') {
    throw new Error('VITE_SITE_URL must not include credentials.');
  }

  if (url.search !== '' || url.hash !== '') {
    throw new Error('VITE_SITE_URL must not include a query string or hash.');
  }

  const path = url.pathname.replace(/\/+$/, '');

  if (path !== '') {
    throw new Error(
      'VITE_SITE_URL must be an origin only (no path). GitHub Pages user sites and custom domains are both served from the domain root.',
    );
  }

  return url.origin;
}
