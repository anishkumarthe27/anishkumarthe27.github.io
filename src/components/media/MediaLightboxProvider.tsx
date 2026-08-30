import { useCallback, useMemo, useState, type ReactNode } from 'react';
import {
  MediaLightboxContext,
  type MediaLightboxContextValue,
} from '@/hooks/useMediaLightbox';
import type { LightboxItem } from '@/types/content';

interface MediaLightboxProviderProps {
  children: ReactNode;
}

export function MediaLightboxProvider({ children }: MediaLightboxProviderProps) {
  const [items, setItems] = useState<LightboxItem[] | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((nextItems: readonly LightboxItem[], nextIndex = 0) => {
    if (nextItems.length === 0) {
      return;
    }

    setItems([...nextItems]);
    setIndex(Math.min(Math.max(nextIndex, 0), nextItems.length - 1));
  }, []);

  const close = useCallback(() => {
    setItems(null);
    setIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setIndex((current) => {
      if (current === null || !items || items.length === 0) {
        return current;
      }

      return (current - 1 + items.length) % items.length;
    });
  }, [items]);

  const showNext = useCallback(() => {
    setIndex((current) => {
      if (current === null || !items || items.length === 0) {
        return current;
      }

      return (current + 1) % items.length;
    });
  }, [items]);

  const value = useMemo<MediaLightboxContextValue>(
    () => ({ items, index, open, close, showPrevious, showNext }),
    [items, index, open, close, showPrevious, showNext],
  );

  return <MediaLightboxContext.Provider value={value}>{children}</MediaLightboxContext.Provider>;
}
