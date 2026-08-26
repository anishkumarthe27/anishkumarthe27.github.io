import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { metrics } from '@/data/metrics';

export function ImpactSection() {
  return (
    <Section id={metrics.id} title={metrics.title} description={metrics.clarification}>
      <p className="kicker">{metrics.resultKicker}</p>
      <Card className="mt-3 p-5 sm:p-6">
        <p className="font-mono text-label break-words text-muted">{metrics.result.label}</p>
        <p className="mt-2 font-medium tracking-tight break-words text-ink text-heading tabular-nums sm:mt-3 sm:text-title">
          {metrics.result.value}
        </p>
      </Card>

      <p className="mt-8 kicker">{metrics.scaleKicker}</p>
      <p className="mt-2 max-w-3xl text-pretty text-caption text-muted">{metrics.scaleClarification}</p>
      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-4 sm:grid-cols-3">
        {metrics.items.map((metric) => (
          <div key={metric.label} className="min-w-0">
            <dt className="font-mono text-label break-words text-muted">{metric.label}</dt>
            <dd className="mt-1 font-medium break-words text-ink text-body tabular-nums">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
