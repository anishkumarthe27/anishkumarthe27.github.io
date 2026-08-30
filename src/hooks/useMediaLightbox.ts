import { createContext, useContext } from 'react';
import type { LightboxItem } from '@/types/content';

export interface MediaLightboxContextValue {
  items: LightboxItem[] | null;
  index: number | null;
  open: (items: readonly LightboxItem[], index?: number) => void;
  close: () => void;
  showPrevious: () => void;
  showNext: () => void;
}

export const MediaLightboxContext = createContext<MediaLightboxContextValue | null>(null);

export function useMediaLightbox(): MediaLightboxContextValue {
  const context = useContext(MediaLightboxContext);

  if (!context) {
    throw new Error('useMediaLightbox must be used within MediaLightboxProvider');
  }

  return context;
}
