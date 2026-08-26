import { copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { normalizeSiteUrl } from './src/config/normalizeSiteUrl.ts';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/**
 * User GitHub Pages sites and custom domains are both served from the origin root.
 * Do not switch this to a repository subpath when adding a custom domain.
 */
const base = '/';

function preloadLatinSans(): Plugin {
  return {
    name: 'preload-latin-sans',
    transformIndexHtml(_html, ctx) {
      if (!ctx.bundle) {
        return [];
      }

      const fontFiles = Object.values(ctx.bundle)
        .filter((item) => item.type === 'asset' && item.fileName.endsWith('.woff2'))
        .map((item) => item.fileName)
        .filter((fileName) => /ibm-plex-sans-latin-(400|500)-normal/.test(fileName))
        .sort();

      return fontFiles.map((fileName) => ({
        tag: 'link',
        attrs: {
          rel: 'preload',
          href: joinBase(base, fileName),
          as: 'font',
          type: 'font/woff2',
          crossorigin: true,
        },
        injectTo: 'head',
      }));
    },
  };
}

function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    enforce: 'post',
    writeBundle() {
      const indexPath = path.resolve(rootDir, 'dist/index.html');
      const fallbackPath = path.resolve(rootDir, 'dist/404.html');

      if (!existsSync(indexPath)) {
        throw new Error('GitHub Pages fallback: dist/index.html was not written.');
      }

      copyFileSync(indexPath, fallbackPath);
    },
  };
}

function injectSiteUrl(siteUrl: string): Plugin {
  return {
    name: 'inject-site-url',
    transformIndexHtml(html) {
      if (!html.includes('%SITE_URL%')) {
        throw new Error('index.html is missing %SITE_URL% placeholders for the public origin.');
      }

      const nextHtml = html.replaceAll('%SITE_URL%', siteUrl);

      return nextHtml;
    },
  };
}

function joinBase(siteBase: string, fileName: string): string {
  const prefix = siteBase.endsWith('/') ? siteBase : `${siteBase}/`;
  return `${prefix}${fileName.replace(/^\//, '')}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, 'VITE_');
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL);
  const resumeAvailable = existsSync(
    path.resolve(rootDir, 'public/assets/Anish-Kumar-Patel-Resume.pdf'),
  );

  process.env.VITE_SITE_URL = siteUrl;
  process.env.VITE_RESUME_AVAILABLE = resumeAvailable ? 'true' : 'false';

  if (!resumeAvailable) {
    console.warn(
      'Resume PDF is not at public/assets/Anish-Kumar-Patel-Resume.pdf. Download links are omitted until that file is added.',
    );
  }

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      preloadLatinSans(),
      injectSiteUrl(siteUrl),
      githubPagesSpaFallback(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, 'src'),
      },
    },
    build: {
      target: 'es2022',
      sourcemap: false,
      modulePreload: {
        polyfill: false,
      },
    },
  };
});
