import { BriefCaseStudyCard } from '@/components/projects/BriefCaseStudyCard';
import { CompactSupportingCard } from '@/components/projects/CompactSupportingCard';
import { Section } from '@/components/layout/Section';
import { supportingProjects } from '@/data/supportingProjects';
import type { SupportingProjectGroup } from '@/types/content';

export function SupportingProjectsSection() {
  const hasDetailedProjects = supportingProjects.detailed.length > 0;
  const hasGroups = supportingProjects.groups.length > 0;
  const hasCompactProjects = supportingProjects.compact.length > 0;

  if (!hasDetailedProjects && !hasGroups && !hasCompactProjects) {
    return <Section id={supportingProjects.id} title={supportingProjects.title} />;
  }

  return (
    <Section id={supportingProjects.id} title={supportingProjects.title}>
      <div className="grid gap-10">
        {hasDetailedProjects ? (
          <ul className="grid gap-6">
            {supportingProjects.detailed.map((project) => (
              <li key={project.id}>
                <BriefCaseStudyCard
                  project={project}
                  kicker={supportingProjects.kicker}
                  labels={supportingProjects.labels}
                />
              </li>
            ))}
          </ul>
        ) : null}

        {supportingProjects.groups.map((group) => (
          <SupportingProjectGroupBlock key={group.id} group={group} />
        ))}

        {hasCompactProjects ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {supportingProjects.compact.map((card) => (
              <li key={card.id}>
                <CompactSupportingCard
                  card={card}
                  headingLevel="h3"
                  kicker={supportingProjects.kicker}
                  githubLinkLabel={supportingProjects.githubLinkLabel}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}

interface SupportingProjectGroupBlockProps {
  group: SupportingProjectGroup;
}

function SupportingProjectGroupBlock({ group }: SupportingProjectGroupBlockProps) {
  const titleId = `${group.id}-title`;

  return (
    <section id={group.id} className="scroll-mt-24" aria-labelledby={titleId}>
      <h3 id={titleId} className="font-medium text-heading text-ink">
        {group.title}
      </h3>
      <p className="mt-3 max-w-3xl text-body text-muted">{group.intro}</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {group.cards.map((card) => (
          <li key={card.id}>
            <CompactSupportingCard
              card={card}
              githubLinkLabel={supportingProjects.githubLinkLabel}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
