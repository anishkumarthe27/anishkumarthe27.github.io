import { siteUrl } from '@/config/siteUrl';
import { profile } from '@/data/profile';

export { siteUrl } from '@/config/siteUrl';

export const seo = {
  title: 'Anish Kumar Patel | Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer at Next Element Pvt. Ltd. PHP, Node.js, and React on school operations, procurement, budget, and ID cards. About 50% faster examination-report page/API and processing time.',
  siteName: profile.name,
  author: profile.name,
  locale: 'en_US',
  robots: 'index, follow, max-image-preview:large',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  canonicalHref: `${siteUrl}/`,
  ogImage: {
    fileName: 'og-image.jpg',
    path: '/og-image.jpg',
    absoluteUrl: `${siteUrl}/og-image.jpg`,
    alt: 'Anish Kumar Patel, Full Stack Software Engineer. PHP, Node.js, and React.',
    type: 'image/jpeg',
    width: 1200,
    height: 630,
  },
  themeColor: {
    light: '#f3f4f6',
    dark: '#0e1217',
  },
} as const;
