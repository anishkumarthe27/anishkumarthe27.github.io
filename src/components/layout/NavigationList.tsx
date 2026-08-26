import type { NavigationItem } from '@/types/content';
import { NavLink } from '@/components/ui/NavLink';
import { useActiveHref } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import { isSafeHref } from '@/utils/href';

interface NavigationListProps {
  items: readonly NavigationItem[];
  layout: 'desktop' | 'mobile' | 'footer';
  onNavigate?: () => void;
  indicatorGroup?: string;
}

export function NavigationList({ items, layout, onNavigate, indicatorGroup }: NavigationListProps) {
  const isMobile = layout === 'mobile';
  const isFooter = layout === 'footer';
  const activeHref = useActiveHref();

  return (
    <ul
      className={cn(
        isMobile && 'flex flex-col gap-1',
        layout === 'desktop' && 'flex flex-nowrap items-center gap-x-4 xl:gap-x-5',
        isFooter &&
          'flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1',
      )}
    >
      {items.map((item) => (
        <li key={item.label}>
          <NavigationItemLink
            item={item}
            layout={layout}
            onNavigate={onNavigate}
            active={item.kind === 'anchor' && item.href === activeHref}
            indicatorGroup={indicatorGroup}
          />
        </li>
      ))}
    </ul>
  );
}

interface NavigationItemLinkProps {
  item: NavigationItem;
  layout: NavigationListProps['layout'];
  onNavigate?: () => void;
  active: boolean;
  indicatorGroup?: string;
}

function NavigationItemLink({
  item,
  layout,
  onNavigate,
  active,
  indicatorGroup,
}: NavigationItemLinkProps) {
  const isMobile = layout === 'mobile';
  const className = cn('tap-target', isMobile ? 'w-full px-2 py-3 text-base' : 'text-sm');

  if (item.kind === 'download') {
    if (!item.href || !isSafeHref(item.href)) {
      return (
        <span
          className={cn('tap-target text-sm text-muted', isMobile && 'w-full px-2 py-3 text-base')}
          aria-disabled="true"
          title="Resume PDF will be added here"
        >
          {item.label}
        </span>
      );
    }

    return (
      <a
        href={item.href}
        download={item.fileName}
        type={item.mimeType}
        className={cn('text-ink hover:text-accent', className)}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <NavLink
      href={item.href}
      className={className}
      onClick={onNavigate}
      active={active}
      indicatorGroup={isMobile ? undefined : indicatorGroup}
    >
      {item.label}
    </NavLink>
  );
}
