import { Section } from '@/components/layout/Section';
import { TagList } from '@/components/ui/TagList';
import { aiEngineering } from '@/data/aiEngineering';

export function AiEngineeringSection() {
  return (
    <Section id="ai-engineering" title={aiEngineering.title} description={aiEngineering.intro}>
      <div className="max-w-3xl space-y-8">
        <p className="text-pretty text-body text-ink">{aiEngineering.ownership}</p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="kicker">{aiEngineering.toolsTitle}</h3>
            <TagList items={aiEngineering.tools} className="mt-3" />
          </div>
          <div>
            <h3 className="kicker">{aiEngineering.usesTitle}</h3>
            <ul className="mt-3 space-y-2 text-body text-ink">
              {aiEngineering.uses.map((use) => (
                <li key={use} className="border-l border-line pl-3 text-muted">
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
