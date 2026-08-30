import { LazyOnView } from '@/components/perf/LazyOnView';
import { MediaThumb } from '@/components/media/MediaThumb';
import { getMediaForProject } from '@/data/portfolioMedia';
import { lightboxItemsFromMedia } from '@/data/lightbox';
import type { PortfolioMediaItem } from '@/data/portfolioMedia';
import { cn } from '@/utils/cn';

interface ProjectMediaGalleryProps {
  projectId: string;
  items?: readonly PortfolioMediaItem[];
  className?: string;
}

export function ProjectMediaGallery({ projectId, items, className }: ProjectMediaGalleryProps) {
  const media = items ?? getMediaForProject(projectId);
  const lightboxItems = lightboxItemsFromMedia(media);

  if (lightboxItems.length === 0) {
    return null;
  }

  return (
    <ul className={cn('grid gap-4 sm:grid-cols-2', className)}>
      {lightboxItems.map((item, index) => (
        <li key={item.id}>
          <figure className="min-w-0">
            <LazyOnView>
              <MediaThumb items={lightboxItems} index={index} />
            </LazyOnView>
            <figcaption className="mt-2 text-pretty text-caption text-muted">
              {item.caption ?? item.title}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
