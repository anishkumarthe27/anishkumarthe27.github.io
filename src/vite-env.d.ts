/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site origin. Empty uses the GitHub Pages user-site default. */
  readonly VITE_SITE_URL?: string;
  /** Set at build time when public/assets/Anish-Kumar-Patel-Resume.pdf exists. */
  readonly VITE_RESUME_AVAILABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
