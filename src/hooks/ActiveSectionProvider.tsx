import type { ReactNode } from 'react';
import { ActiveSectionContext, useActiveSectionValue } from '@/hooks/useActiveSection';

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const activeHref = useActiveSectionValue();

  return <ActiveSectionContext.Provider value={activeHref}>{children}</ActiveSectionContext.Provider>;
}
