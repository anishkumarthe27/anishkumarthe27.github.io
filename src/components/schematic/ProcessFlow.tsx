import { FlowArrow } from '@/components/schematic/FlowArrow';
import type { LifecycleStage } from '@/types/content';
import { cn } from '@/utils/cn';

interface ProcessFlowProps {
  kicker: string;
  stages: readonly LifecycleStage[];
  bandSize?: number;
  density?: 'default' | 'compact';
}

export function ProcessFlow({
  kicker,
  stages,
  bandSize = 3,
  density = 'default',
}: ProcessFlowProps) {
  const bands = chunkStages(stages, bandSize);
  const isCompact = density === 'compact';

  return (
    <div className="relative overflow-hidden rounded-md border border-line bg-raised shadow-xs">
      <div className="schematic-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative p-4 sm:p-6">
        <p className="kicker">{kicker}</p>
        <div className="mt-5">
          {bands.map((band, bandIndex) => {
            const firstStage = band[0];
            const lastStage = band.at(-1);

            if (!firstStage || !lastStage) {
              return null;
            }

            return (
              <div key={firstStage.step}>
                {bandIndex > 0 ? (
                  <FlowArrow direction="down" className="mx-auto my-1 h-8 w-6" />
                ) : null}
                <div className="schematic-plane-surface rounded-md p-4 sm:p-5">
                  <p className="kicker">
                    {firstStage.step}–{lastStage.step}
                  </p>
                  <ol
                    start={Number(firstStage.step)}
                    className={cn(
                      'mt-4 flex flex-col gap-3 xl:grid xl:gap-y-0',
                      isCompact ? 'xl:gap-x-6' : 'xl:gap-x-8',
                      bandColsClassName[band.length] ?? 'xl:grid-cols-3',
                    )}
                  >
                    {band.map((stage, stageIndex) => (
                      <li key={stage.step} className="relative min-w-0">
                        <div
                          className={cn(
                            'schematic-node-surface h-full rounded-sm',
                            isCompact ? 'px-2.5 py-2' : 'px-3 py-3',
                          )}
                        >
                          <p className="font-mono text-label text-muted">{stage.step}</p>
                          <p
                            className={cn(
                              'mt-1 font-medium break-words text-ink',
                              isCompact ? 'text-caption leading-snug' : 'text-body',
                            )}
                          >
                            {stage.name}
                          </p>
                        </div>
                        {stageIndex < band.length - 1 ? (
                          <>
                            <FlowArrow
                              direction="down"
                              className="mx-auto mt-3 h-6 w-5 xl:hidden"
                            />
                            <FlowArrow
                              direction="right"
                              className={cn(
                                'pointer-events-none absolute top-1/2 hidden -translate-y-1/2 xl:block',
                                isCompact ? '-right-4 h-4 w-5' : '-right-6 h-5 w-6',
                              )}
                            />
                          </>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function chunkStages(stages: readonly LifecycleStage[], size: number): LifecycleStage[][] {
  const bands: LifecycleStage[][] = [];

  for (let index = 0; index < stages.length; index += size) {
    bands.push([...stages.slice(index, index + size)]);
  }

  return bands;
}

const bandColsClassName: Record<number, string> = {
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
};
