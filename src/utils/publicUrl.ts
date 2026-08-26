/** Join a file under `public/` using Vite's base URL (origin root for GitHub Pages and custom domains). */
export function publicUrl(relativePath: string): string {
  const assetPath = relativePath.replace(/^\//, '');
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${assetPath}`;
}
