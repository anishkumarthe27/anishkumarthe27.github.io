import { LazyOnView } from '@/components/perf/LazyOnView';
import { MediaThumb } from '@/components/media/MediaThumb';
import { Section } from '@/components/layout/Section';
import { lightboxItemsFromMedia } from '@/data/lightbox';
import { resolveShowcaseGroup, workShowcase } from '@/data/workShowcase';

export function WorkShowcaseSection() {
  const groups = workShowcase.groups
    .map(resolveShowcaseGroup)
    .filter((group) => group.items.length > 0);

  if (groups.length === 0) {
    return null;
  }

  return (
    <Section id={workShowcase.id} title={workShowcase.title} description={workShowcase.intro}>
      <div className="grid gap-10">
        {groups.map((group) => {
          const lightboxItems = lightboxItemsFromMedia(group.items);

          return (
            <section key={group.id} id={`showcase-${group.id}`} className="scroll-mt-24">
              <h3 className="font-medium text-heading text-ink">{group.title}</h3>
              <p className="mt-2 max-w-3xl text-pretty text-body text-muted">{group.description}</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
            </section>
          );
        })}
      </div>
    </Section>
  );
}
