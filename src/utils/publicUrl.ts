/** Join a file under `public/` using Vite's base URL (origin root for GitHub Pages and custom domains).
 * Do not use `/portfolio/` as a public path prefix. This is a user site; GitHub serves
 * `username.github.io/portfolio/` from the separate `portfolio` repository.
 */
export function publicUrl(relativePath: string): string {
  const assetPath = relativePath.replace(/^\//, '');
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${assetPath}`;
}
