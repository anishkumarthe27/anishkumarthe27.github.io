import { FeaturedWorkCard } from '@/components/projects/FeaturedWorkCard';
import { Section } from '@/components/layout/Section';
import { featuredTopWork, getOrderedFeaturedWorks } from '@/data/featuredWork';

export function FeaturedWorkSection() {
  const items = getOrderedFeaturedWorks(featuredTopWork.items);

  if (items.length === 0) {
    return null;
  }

  return (
    <Section id={featuredTopWork.id} title={featuredTopWork.title} description={featuredTopWork.intro}>
      <ul className="grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <FeaturedWorkCard item={item} eagerImage={index === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
