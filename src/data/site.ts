import { resume } from '@/data/resume';
import { seo } from '@/data/seo';
import type { NavigationItem, Site } from '@/types/content';

export const navigation: readonly NavigationItem[] = [
  { kind: 'anchor', href: '#home', label: 'Home' },
  { kind: 'anchor', href: '#experience', label: 'Experience' },
  { kind: 'anchor', href: '#projects', label: 'Projects' },
  { kind: 'anchor', href: '#skills', label: 'Skills' },
  { kind: 'anchor', href: '#about', label: 'About' },
  { kind: 'anchor', href: '#contact', label: 'Contact' },
  ...(resume.href
    ? [
        {
          kind: 'download' as const,
          href: resume.href,
          label: resume.label,
          fileName: resume.fileName,
          mimeType: resume.mimeType,
        },
      ]
    : []),
];

export const site: Site = {
  title: seo.title,
  description: seo.description,
  navigation,
};
