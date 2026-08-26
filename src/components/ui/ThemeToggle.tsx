import { useEffect, useState } from 'react';
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  readDocumentTheme,
  themeStorageKey,
  type Theme,
} from '@/utils/theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readDocumentTheme);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const syncFromSystem = () => {
      if (localStorage.getItem(themeStorageKey)) {
        return;
      }
      const next = getPreferredTheme();
      setTheme(next);
      applyTheme(next);
    };

    media.addEventListener('change', syncFromSystem);
    return () => {
      media.removeEventListener('change', syncFromSystem);
    };
  }, []);

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-raised text-ink hover:border-accent hover:text-accent"
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={() => {
        persistTheme(nextTheme);
        setTheme(nextTheme);
      }}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 13.5A7 7 0 0 1 10.5 5a7 7 0 1 0 6 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3.5v1.5M12 19v1.5M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3.5 12H5M19 12h1.5M4.9 19.1 6 18M18 6l1.1-1.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
