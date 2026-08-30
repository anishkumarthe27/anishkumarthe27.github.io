import { useEffect, useId, useRef, type MouseEvent, type ReactNode } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';
import { useMediaLightbox } from '@/hooks/useMediaLightbox';
import type { LightboxItem } from '@/types/content';
import { publicUrl } from '@/utils/publicUrl';

export function MediaLightboxHost() {
  const { items, index, close, showPrevious, showNext } = useMediaLightbox();

  if (!items || index === null) {
    return null;
  }

  return (
    <MediaLightboxDialog
      items={items}
      index={index}
      onClose={close}
      onPrevious={showPrevious}
      onNext={showNext}
    />
  );
}

interface MediaLightboxDialogProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function MediaLightboxDialog({
  items,
  index,
  onClose,
  onPrevious,
  onNext,
}: MediaLightboxDialogProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        onPrevious();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!item) {
    return null;
  }

  const src = publicUrl(item.src);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[color-mix(in_srgb,var(--ds-canvas)_72%,transparent)] p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(92dvh,56rem)] w-full max-w-6xl flex-col"
        onClick={(event: MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
        }}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 id={titleId} className="text-pretty font-medium text-heading text-ink">
              {item.title}
            </h2>
            {item.caption ? (
              <p className="mt-1 max-w-3xl text-pretty text-caption text-muted">{item.caption}</p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-raised text-ink hover:border-accent hover:text-accent"
            aria-label="Close screenshot"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-md border border-line bg-raised p-2 sm:p-4">
          {item.type === 'video' ? (
            <video
              className="max-h-[min(72dvh,44rem)] w-full bg-subtle"
              controls
              playsInline
              preload="metadata"
              src={src}
              aria-label={item.alt}
            />
          ) : (
            <img
              src={src}
              alt={item.alt}
              className="max-h-[min(72dvh,44rem)] w-full object-contain"
            />
          )}
        </div>

        {hasMultiple ? (
          <div className="mt-3 flex items-center justify-between gap-3">
            <LightboxNavButton label="Previous screenshot" onClick={onPrevious}>
              <ChevronLeftIcon />
            </LightboxNavButton>
            <p className="font-mono text-caption text-muted">
              {index + 1} / {items.length}
            </p>
            <LightboxNavButton label="Next screenshot" onClick={onNext}>
              <ChevronRightIcon />
            </LightboxNavButton>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function LightboxNavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-raised text-ink hover:border-accent hover:text-accent"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
