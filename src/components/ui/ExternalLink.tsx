import type { ReactNode } from 'react';
import { isHttpsUrl, isSafeHref } from '@/utils/href';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Outbound HTTPS links only. Adds noopener/noreferrer so the opener and referrer are not leaked. */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  if (!isSafeHref(href) || !isHttpsUrl(href)) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
