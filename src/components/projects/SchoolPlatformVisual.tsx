import { metrics } from '@/data/metrics';
import type { ModuleGroup, PlatformVisual } from '@/types/content';

interface SchoolPlatformVisualProps {
  moduleGroups: readonly ModuleGroup[];
  visual: PlatformVisual;
  securityTitle?: string;
  securityIntro?: string;
  security?: readonly string[];
  scaleIntro?: string;
  includeScaleMetrics?: boolean;
}

export function SchoolPlatformVisual({
  moduleGroups,
  visual,
  securityTitle,
  securityIntro,
  security,
  scaleIntro,
  includeScaleMetrics = true,
}: SchoolPlatformVisualProps) {
  return (
    <div className="relative overflow-hidden rounded-md border border-line bg-raised shadow-xs">
      <div className="schematic-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative grid gap-6 p-4 sm:p-6">
        <p className="kicker">{visual.scopeKicker}</p>

        {includeScaleMetrics ? (
          <div>
            <p className="kicker">{visual.scaleKicker}</p>
            {scaleIntro ? (
              <p className="mt-2 max-w-3xl text-body text-muted">{scaleIntro}</p>
            ) : null}
            <dl className="mt-4 grid grid-cols-1 gap-2 min-[375px]:grid-cols-2 sm:grid-cols-3">
              {metrics.items.map((metric) => (
                <div
                  key={metric.label}
                  className="schematic-node-surface min-w-0 rounded-sm px-3 py-2"
                >
                  <dt className="font-mono text-label break-words text-muted">{metric.label}</dt>
                  <dd className="mt-1 font-medium break-words text-body text-ink tabular-nums">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 max-w-3xl text-caption text-muted">{metrics.scaleClarification}</p>
          </div>
        ) : null}

        <div className="grid gap-4 lg:grid-cols-2">
          {moduleGroups.map((group) => (
            <section key={group.name} className="schematic-plane-surface rounded-md p-3 sm:p-4">
              <h5 className="kicker">{group.name}</h5>
              {group.intro ? <p className="mt-2 text-caption text-muted">{group.intro}</p> : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="schematic-node-surface rounded-sm px-2.5 py-1.5 font-mono text-caption break-words text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {security && security.length > 0 ? (
          <section className="schematic-plane-surface rounded-md p-3 sm:p-4">
            <h5 className="kicker">{securityTitle}</h5>
            {securityIntro ? <p className="mt-2 text-caption text-muted">{securityIntro}</p> : null}
            <ul className="mt-4 flex flex-wrap gap-2">
              {security.map((item) => (
                <li
                  key={item}
                  className="schematic-node-surface rounded-sm px-2.5 py-1.5 font-mono text-caption break-words text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
