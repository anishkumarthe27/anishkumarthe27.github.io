import { MediaThumb } from '@/components/media/MediaThumb';
import { useMediaLightbox } from '@/hooks/useMediaLightbox';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card } from '@/components/ui/Card';
import { TagList } from '@/components/ui/TagList';
import { featuredPreviewItems, featuredLightboxItems } from '@/data/lightbox';
import { featuredTopWork, featuredWorkCategoryLabels } from '@/data/featuredWork';
import type { FeaturedWorkItem } from '@/types/content';
import { cn } from '@/utils/cn';

interface FeaturedWorkCardProps {
  item: FeaturedWorkItem;
  eagerImage?: boolean;
}

export function FeaturedWorkCard({ item, eagerImage = false }: FeaturedWorkCardProps) {
  const titleId = `${item.id}-title`;
  const labels = featuredTopWork.labels;
  const { open } = useMediaLightbox();
  const projectHref = item.relatedProject ? `#${item.relatedProject}` : undefined;
  const preview = featuredPreviewItems(item);
  const gallery = featuredLightboxItems(item);

  return (
    <Card as="article" className="flex h-full min-w-0 flex-col overflow-hidden" hover aria-labelledby={titleId}>
      {preview.length > 0 ? (
        <div
          className={cn(
            'grid gap-px border-b border-line bg-line',
            preview.length === 1 ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-3',
          )}
        >
          {preview.map((thumb, index) => (
            <MediaThumb
              key={thumb.id}
              items={gallery}
              index={index}
              eager={eagerImage && index === 0}
              className="min-h-36 rounded-none border-0 sm:min-h-44"
            />
          ))}
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <p className="kicker">{featuredWorkCategoryLabels[item.category]}</p>
        <h3 id={titleId} className="mt-3 text-pretty font-medium text-heading text-ink">
          {item.title}
        </h3>
        <p className="mt-3 max-w-3xl text-pretty text-body text-muted">{item.shortDescription}</p>

        {item.highlights.length > 0 ? (
          <ul className="mt-5 grid gap-2">
            {item.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="border-l border-line pl-3 text-body text-ink">
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-5 max-w-3xl text-pretty text-caption text-muted">{item.contribution}</p>

        {item.technologies.length > 0 ? (
          <TagList items={item.technologies} className="mt-5" />
        ) : null}

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
          {gallery.length > 0 ? (
            <button
              type="button"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-5 text-center text-sm font-medium text-on-accent hover:bg-accent-hover sm:w-auto"
              onClick={() => {
                open(gallery, 0);
              }}
            >
              {labels.viewScreenshots}
            </button>
          ) : null}
          {projectHref ? (
            <ButtonLink href={projectHref} variant="secondary">
              {labels.viewProject}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
