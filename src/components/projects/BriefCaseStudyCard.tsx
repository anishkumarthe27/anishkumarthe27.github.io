import type { ReactNode } from 'react';
import { Card } from '@/components/ui/Card';
import { TagList } from '@/components/ui/TagList';
import type { BriefCaseStudy, CaseStudyLabels } from '@/types/content';

interface BriefCaseStudyCardProps {
  project: BriefCaseStudy;
  kicker?: string;
  labels: CaseStudyLabels;
}

export function BriefCaseStudyCard({ project, kicker, labels }: BriefCaseStudyCardProps) {
  const titleId = `${project.id}-title`;

  return (
    <Card
      as="article"
      id={project.id}
      className="scroll-mt-24 p-5 sm:p-6"
      aria-labelledby={titleId}
    >
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h3
        id={titleId}
        className={
          kicker
            ? 'mt-3 text-pretty font-medium text-heading text-ink'
            : 'text-pretty font-medium text-heading text-ink'
        }
      >
        {project.title}
      </h3>
      <p className="mt-3 max-w-3xl text-pretty text-body text-ink">{project.summary}</p>

      <div className="mt-6 divide-y divide-line">
        {project.problem ? (
          <StudyField title={labels.problem}>
            <p className="max-w-3xl text-pretty text-body text-muted">{project.problem}</p>
          </StudyField>
        ) : null}

        {project.solution ? (
          <StudyField title={labels.solution}>
            <p className="max-w-3xl text-pretty text-body text-muted">{project.solution}</p>
          </StudyField>
        ) : null}

        {project.implementation ? (
          <StudyField title={project.implementationTitle ?? labels.implementation}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.implementation.map((item) => (
                <li key={item} className="border-l border-line pl-3 text-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </StudyField>
        ) : null}

        {project.value ? (
          <StudyField title={project.valueTitle ?? labels.value}>
            <div className="max-w-3xl space-y-3 text-pretty text-body text-muted">
              {project.value.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </StudyField>
        ) : null}

        {project.performanceMetric ? (
          <StudyField title={labels.measuredResult}>
            <p className="max-w-3xl text-pretty text-body text-muted">
              {project.performanceMetric}
            </p>
          </StudyField>
        ) : null}
      </div>

      {project.stack ? <TagList items={project.stack} className="mt-6" /> : null}
    </Card>
  );
}

function StudyField({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-6 first:pt-0 last:pb-0">
      <h4 className="kicker">{title}</h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}
