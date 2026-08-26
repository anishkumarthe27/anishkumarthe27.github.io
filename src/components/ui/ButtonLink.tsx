import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { focusInPageTarget } from '@/utils/focus';
import { isHttpsUrl, isSafeHref } from '@/utils/href';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  download?: string;
  type?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  download,
  type,
  external = false,
}: ButtonLinkProps) {
  const classNameResolved = cn(
    'inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 text-center text-sm font-medium sm:w-auto',
    variant === 'primary' && 'bg-accent text-on-accent hover:bg-accent-hover',
    variant === 'secondary' &&
      'border border-line bg-raised text-ink hover:border-accent hover:text-accent',
    className,
  );

  if (!isSafeHref(href)) {
    return (
      <span className={classNameResolved} aria-disabled="true">
        {children}
      </span>
    );
  }

  const openInNewTab = external || isHttpsUrl(href);

  return (
    <a
      href={href}
      download={download}
      type={type}
      className={classNameResolved}
      onClick={() => {
        if (!download && href.startsWith('#')) {
          focusInPageTarget(href);
        }
      }}
      {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {openInNewTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
