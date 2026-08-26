import { profile } from '@/data/profile';
import { resume } from '@/data/resume';
import type { ContactContent } from '@/types/content';

export const contact: ContactContent = {
  name: profile.name,
  email: profile.email,
  emailActionLabel: 'Email',
  github: {
    label: 'GitHub',
    href: profile.githubUrl,
  },
  linkedin: {
    label: 'LinkedIn',
    href: profile.linkedinUrl,
  },
  resume,
  resumeActionLabel: resume.ctaLabel,
};
