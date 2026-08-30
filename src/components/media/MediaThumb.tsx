import { useMediaLightbox } from '@/hooks/useMediaLightbox';
import type { LightboxItem } from '@/types/content';
import { publicUrl } from '@/utils/publicUrl';
import { cn } from '@/utils/cn';

interface MediaThumbProps {
  items: readonly LightboxItem[];
  index: number;
  eager?: boolean;
  className?: string;
}

export function MediaThumb({ items, index, eager = false, className }: MediaThumbProps) {
  const { open } = useMediaLightbox();
  const item = items[index];

  if (!item) {
    return null;
  }

  const src = publicUrl(item.src);

  return (
    <button
      type="button"
      className={cn(
        'flex min-h-40 w-full items-center justify-center overflow-hidden rounded-md border border-line bg-subtle hover:border-accent',
        className,
      )}
      onClick={() => {
        open(items, index);
      }}
      aria-label={`${item.type === 'video' ? 'Open video' : 'Open screenshot'}: ${item.title}`}
    >
      {item.type === 'video' ? (
        <video
          className="max-h-56 w-full object-contain bg-subtle"
          preload="metadata"
          muted
          playsInline
          src={src}
          aria-hidden="true"
        />
      ) : (
        <img
          src={src}
          alt={item.alt}
          width={1280}
          height={800}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="max-h-56 w-full object-contain"
        />
      )}
    </button>
  );
}
