import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { focusInPageTarget } from '@/utils/focus';
import { isSafeHref } from '@/utils/href';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  indicatorGroup?: string;
}

export function NavLink({
  href,
  children,
  className,
  onClick,
  active = false,
  indicatorGroup,
}: NavLinkProps) {
  if (!isSafeHref(href) || !href.startsWith('#')) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a
      href={href}
      onClick={() => {
        onClick?.();
        focusInPageTarget(href);
      }}
      aria-current={active ? 'page' : undefined}
      className={cn('relative text-ink hover:text-accent', active && 'text-accent', className)}
    >
      {children}
      {active && indicatorGroup ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1 hidden h-px bg-accent lg:block"
        />
      ) : null}
    </a>
  );
}
