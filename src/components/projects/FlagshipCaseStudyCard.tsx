import { lazy, Suspense, type ReactNode } from 'react';
import { ProcessFlow } from '@/components/schematic/ProcessFlow';
import { LazyOnView } from '@/components/perf/LazyOnView';
import { TagList } from '@/components/ui/TagList';
import { caseStudyLabels as labels } from '@/data/caseStudyLabels';
import type { FlagshipCaseStudy } from '@/types/content';
import { cn } from '@/utils/cn';

const SchoolPlatformVisual = lazy(async () => {
  const module = await import('@/components/projects/SchoolPlatformVisual');
  return { default: module.SchoolPlatformVisual };
});

const IdCardPlatformVisual = lazy(async () => {
  const module = await import('@/components/projects/IdCardPlatformVisual');
  return { default: module.IdCardPlatformVisual };
});

function VisualFallback() {
  return <div className="min-h-48 rounded-md border border-line bg-subtle" aria-hidden="true" />;
}

interface FlagshipCaseStudyCardProps {
  study: FlagshipCaseStudy;
}

export function FlagshipCaseStudyCard({ study }: FlagshipCaseStudyCardProps) {
  const titleId = `${study.id}-title`;

  return (
    <article
      id={study.id}
      className="surface min-w-0 scroll-mt-24 p-5 sm:p-6 lg:p-8"
      aria-labelledby={titleId}
    >
      <p className="kicker">{study.kicker}</p>
      <h3 id={titleId} className="mt-3 text-pretty font-medium text-heading text-ink sm:text-title">
        {study.title}
      </h3>
      <p className="mt-4 max-w-3xl text-pretty text-body text-ink">{study.summary}</p>

      <div className="mt-8 divide-y divide-line">
        <CaseStudyBlock title={labels.problem}>
          <p className="max-w-3xl text-pretty text-body text-muted">{study.problem}</p>
        </CaseStudyBlock>

        {study.solution ? (
          <CaseStudyBlock title={labels.solution}>
            <p className="max-w-3xl text-pretty text-body text-muted">{study.solution}</p>
          </CaseStudyBlock>
        ) : null}

        {study.objective ? (
          <CaseStudyBlock title={labels.objective}>
            <p className="max-w-3xl text-pretty text-body text-muted">{study.objective}</p>
          </CaseStudyBlock>
        ) : null}

        {study.involvement || study.involvementIntro ? (
          <CaseStudyBlock title={labels.involvement}>
            {study.involvementIntro ? (
              <p className="max-w-3xl text-pretty text-body text-muted">{study.involvementIntro}</p>
            ) : null}
            {study.involvement ? (
              <ul className={cn('grid gap-2 sm:grid-cols-2', study.involvementIntro && 'mt-4')}>
                {study.involvement.map((item) => (
                  <li key={item} className="border-l border-line pl-3 text-body text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </CaseStudyBlock>
        ) : null}

        {study.visual === 'platform' && study.moduleGroups && study.platformVisual ? (
          <CaseStudyBlock title={labels.platform}>
            <LazyOnView>
              <Suspense fallback={<VisualFallback />}>
                <SchoolPlatformVisual
                  moduleGroups={study.moduleGroups}
                  visual={study.platformVisual}
                  securityTitle={study.securityTitle}
                  securityIntro={study.securityIntro}
                  security={study.security}
                  scaleIntro={study.scaleIntro}
                  includeScaleMetrics={study.includeScaleMetrics}
                />
              </Suspense>
            </LazyOnView>
          </CaseStudyBlock>
        ) : null}

        {study.modules ? (
          <CaseStudyBlock title={study.modulesTitle ?? labels.modules}>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {study.modules.map((module) => (
                <li
                  key={module}
                  className="rounded-sm border border-line bg-subtle px-3 py-2 font-mono text-caption break-words text-ink"
                >
                  {module}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {study.relationships ? (
          <CaseStudyBlock title={labels.relationships}>
            {study.relationshipsIntro ? (
              <p className="max-w-3xl text-pretty text-body text-muted">
                {study.relationshipsIntro}
              </p>
            ) : null}
            <ul
              className={cn(
                'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3',
                study.relationshipsIntro && 'mt-4',
              )}
            >
              {study.relationships.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-line bg-subtle px-3 py-2 font-mono text-caption break-words text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {study.workflow ? (
          <CaseStudyBlock title={labels.workflow}>
            {study.visual === 'id-card' && study.idCardVisual ? (
              <LazyOnView>
                <Suspense fallback={<VisualFallback />}>
                  <IdCardPlatformVisual
                    visual={study.idCardVisual}
                    kicker={study.workflowKicker ?? labels.workflowFallbackKicker}
                    stages={study.workflow}
                    note={study.workflowNote}
                    bandSize={study.workflowBandSize}
                  />
                </Suspense>
              </LazyOnView>
            ) : (
              <>
                <ProcessFlow
                  kicker={study.workflowKicker ?? labels.workflowFallbackKicker}
                  stages={study.workflow}
                  bandSize={study.workflowBandSize}
                />
                {study.workflowNote ? (
                  <p className="mt-4 max-w-3xl text-pretty text-body text-muted">
                    {study.workflowNote}
                  </p>
                ) : null}
              </>
            )}
          </CaseStudyBlock>
        ) : null}

        {study.capabilities ? (
          <CaseStudyBlock title={study.capabilitiesTitle ?? labels.capabilities}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {study.capabilities.map((item) => (
                <li key={item} className="border-l border-line pl-3 text-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {study.performance ? (
          <CaseStudyBlock title={labels.performance}>
            {study.performanceIntro ? (
              <p className="max-w-3xl text-pretty text-body text-muted">{study.performanceIntro}</p>
            ) : null}
            <ul className={cn('grid gap-2 sm:grid-cols-2', study.performanceIntro && 'mt-4')}>
              {study.performance.map((item) => (
                <li key={item} className="border-l border-line pl-3 text-body text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {study.result ? (
          <CaseStudyBlock title={labels.result}>
            <div className="max-w-3xl space-y-3 text-pretty text-body text-muted">
              {study.result.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CaseStudyBlock>
        ) : null}

        <CaseStudyBlock title={labels.technology}>
          <div className="grid gap-6 sm:grid-cols-2">
            {study.stackGroups.map((group) => (
              <div key={group.name}>
                <h5 className="kicker">{group.name}</h5>
                <TagList items={group.items} className="mt-3" />
              </div>
            ))}
          </div>
        </CaseStudyBlock>

        {study.aiContribution ? (
          <CaseStudyBlock title={labels.aiAssisted}>
            <div className="max-w-3xl space-y-3 text-pretty text-body text-muted">
              {study.aiContribution.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CaseStudyBlock>
        ) : null}
      </div>
    </article>
  );
}

interface CaseStudyBlockProps {
  title: string;
  children: ReactNode;
}

function CaseStudyBlock({ title, children }: CaseStudyBlockProps) {
  return (
    <section className="py-8 first:pt-0 last:pb-0">
      <h4 className="kicker">{title}</h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}
