import { Section } from '@/components/layout/Section';
import { professionalSummary } from '@/data/summary';

export function SummarySection() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-6 text-pretty text-body text-ink">
        <p>{professionalSummary.positioning}</p>
        <div>
          <p>{professionalSummary.scopeIntro}</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {professionalSummary.scope.map((item) => (
              <li key={item} className="border-l border-line pl-3 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p>{professionalSummary.collaboration}</p>
      </div>
    </Section>
  );
}
