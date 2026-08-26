import { github } from '@/data/github';
import { profile } from '@/data/profile';
import { resume } from '@/data/resume';
import type { HeroContent } from '@/types/content';

export const hero: HeroContent = {
  statement:
    'PHP, Node.js, and React on school operations, procurement, budget, reporting, and an in-house ID card platform. Examination-report page/API response time and processing time fell by about 50% after MySQL query, index, and processing work.',
  context: 'Modules built from scratch and feature work on existing systems.',
  primaryCta: {
    label: 'View case studies',
    href: '#projects',
  },
  secondaryCta: {
    label: resume.ctaLabel,
    href: resume.href,
    download: resume.fileName,
    mimeType: resume.mimeType,
  },
  socials: [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: github.displayUrl, href: github.href },
    { label: 'LinkedIn', href: profile.linkedinUrl },
  ],
  architecture: {
    kicker: 'Technologies used',
    caption: 'Stack across this work — not the architecture of one system.',
    layers: [
      { name: 'Interface', nodes: ['React', 'HTML / CSS', 'Bootstrap / jQuery'] },
      { name: 'Application', nodes: ['PHP', 'CodeIgniter', 'Node.js', 'Express.js'] },
      { name: 'Data', nodes: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    ],
  },
};
