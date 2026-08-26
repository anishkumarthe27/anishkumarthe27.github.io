import { BriefCaseStudyCard } from '@/components/projects/BriefCaseStudyCard';
import { FlagshipCaseStudyCard } from '@/components/projects/FlagshipCaseStudyCard';
import { Section } from '@/components/layout/Section';
import { featuredCaseStudies } from '@/data/caseStudies';

export function CaseStudiesSection() {
  return (
    <Section id={featuredCaseStudies.id} title={featuredCaseStudies.title}>
      <ul className="grid gap-8">
        {featuredCaseStudies.studies.map((study) => (
          <li key={study.id}>
            {study.kind === 'flagship' ? (
              <FlagshipCaseStudyCard study={study} />
            ) : (
              <BriefCaseStudyCard project={study} labels={featuredCaseStudies.labels} />
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
