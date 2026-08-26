import { profile } from '@/data/profile';
import type { GithubContent } from '@/types/content';
import { displayHttpsHost } from '@/utils/href';

export const github: GithubContent = {
  id: 'github',
  title: 'GitHub',
  href: profile.githubUrl,
  displayUrl: displayHttpsHost(profile.githubUrl),
  ctaLabel: 'Open GitHub profile',
};
