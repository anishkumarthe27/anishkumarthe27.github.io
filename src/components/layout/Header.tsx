import { useEffect, useId, useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { NavigationList } from '@/components/layout/NavigationList';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { profile } from '@/data/profile';
import { site } from '@/data/site';
import { focusInPageTarget } from '@/utils/focus';

const desktopNavQuery = '(min-width: 1024px)';

function getVisibleFocusable(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter(
    (element) => element.getClientRects().length > 0,
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const header = headerRef.current;
    const main = document.getElementById('main-content');
    const footer = document.querySelector('footer');
    const skipLink = document.getElementById('skip-link');
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');
    skipLink?.setAttribute('inert', '');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !header) {
        return;
      }

      const focusable = getVisibleFocusable(header);
      const first = focusable[0];
      const last = focusable.at(-1);

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.matchMedia(desktopNavQuery).matches) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      skipLink?.removeAttribute('inert');
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-raised">
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-4">
        <a
          href="#home"
          className="flex min-h-11 min-w-0 flex-col justify-center rounded-sm hover:text-accent"
          onClick={() => {
            closeMenu();
            focusInPageTarget('#home');
          }}
        >
          <p className="truncate text-sm font-medium text-ink">{profile.name}</p>
          <p className="kicker hidden truncate min-[22.5rem]:block lg:hidden">{profile.title}</p>
        </a>
        <nav className="hidden lg:block" aria-label="Primary">
          <NavigationList items={site.navigation} layout="desktop" indicatorGroup="header-nav" />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-raised text-ink hover:border-accent hover:text-accent lg:hidden"
            aria-controls={isMenuOpen ? menuId : undefined}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setIsMenuOpen((open) => !open);
            }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>
      {isMenuOpen ? (
        <div
          id={menuId}
          className="menu-panel fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-line bg-raised lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Primary">
              <NavigationList items={site.navigation} layout="mobile" onNavigate={closeMenu} />
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
