import { seo } from '@/data/seo';

export type Theme = 'light' | 'dark';

export const themeStorageKey = 'portfolio-theme';

export function getStoredTheme(): Theme | undefined {
  const stored = localStorage.getItem(themeStorageKey);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return undefined;
}

export function getPreferredTheme(): Theme {
  return (
    getStoredTheme() ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
}

export function readDocumentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? seo.themeColor.dark : seo.themeColor.light);
  }
}

export function persistTheme(theme: Theme): void {
  localStorage.setItem(themeStorageKey, theme);
  applyTheme(theme);
}
