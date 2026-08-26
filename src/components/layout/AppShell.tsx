import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ActiveSectionProvider } from '@/hooks/ActiveSectionProvider';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ActiveSectionProvider>
      <div className="flex min-h-dvh flex-col">
        <a
          id="skip-link"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-raised focus:px-3 focus:py-2"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </ActiveSectionProvider>
  );
}
