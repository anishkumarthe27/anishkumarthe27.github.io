import type { Resume } from '@/types/content';
import { publicUrl } from '@/utils/publicUrl';

/** Exact filename required at `public/assets/`. Do not invent a placeholder PDF. */
export const resumeFileName = 'Anish-Kumar-Patel-Resume.pdf';
export const resumePublicPath = `assets/${resumeFileName}`;

const resumeAvailable = import.meta.env.VITE_RESUME_AVAILABLE === 'true';

export const resume: Resume = {
  label: 'Resume',
  ctaLabel: 'Download Resume',
  fileName: resumeFileName,
  publicPath: resumePublicPath,
  href: resumeAvailable ? publicUrl(resumePublicPath) : '',
  mimeType: 'application/pdf',
};
