import type { SocialLink } from '@/types/content';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { isSafeHref } from '@/utils/href';

interface SocialLinksProps {
  links: readonly SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <SocialItem link={link} />
        </li>
      ))}
    </ul>
  );
}

function SocialItem({ link }: { link: SocialLink }) {
  const className = 'tap-target interactive-text text-sm';

  if (link.href.startsWith('mailto:')) {
    if (!isSafeHref(link.href)) {
      return <span className={className}>{link.label}</span>;
    }

    return (
      <a className={className} href={link.href}>
        {link.label}
      </a>
    );
  }

  return (
    <ExternalLink href={link.href} className={className}>
      {link.label}
    </ExternalLink>
  );
}
