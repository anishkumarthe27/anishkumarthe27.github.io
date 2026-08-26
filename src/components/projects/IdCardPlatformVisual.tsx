import { ProcessFlow } from '@/components/schematic/ProcessFlow';
import type { IdCardVisual, LifecycleStage } from '@/types/content';
import { cn } from '@/utils/cn';

interface IdCardPlatformVisualProps {
  visual: IdCardVisual;
  kicker: string;
  stages: readonly LifecycleStage[];
  note?: string;
  bandSize?: number;
}

export function IdCardPlatformVisual({
  visual,
  kicker,
  stages,
  note,
  bandSize = 5,
}: IdCardPlatformVisualProps) {
  return (
    <div className="grid gap-4">
      <div className="relative overflow-hidden rounded-md border border-line bg-raised shadow-xs">
        <div className="schematic-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative grid gap-6 p-4 sm:p-6 xl:grid-cols-[minmax(14rem,0.85fr)_minmax(0,1.15fr)] xl:items-start">
          <p className="kicker xl:col-span-2">{visual.architectureKicker}</p>
          <TemplateCanvas visual={visual} />
          <PlaceholderMapping visual={visual} />
          <ArchitectureLayers visual={visual} />
        </div>
      </div>
      <ProcessFlow kicker={kicker} stages={stages} bandSize={bandSize} density="compact" />
      {note ? <p className="max-w-3xl text-pretty text-body text-muted">{note}</p> : null}
    </div>
  );
}

function TemplateCanvas({ visual }: { visual: IdCardVisual }) {
  const textFields = visual.mappedFields.filter((field) => field.kind === 'text');

  return (
    <div className="mx-auto w-full max-w-[17rem] xl:mx-0">
      <div className="schematic-node-surface rounded-md p-3 sm:p-4">
        <p className="kicker">{visual.templateKicker}</p>
        <div className="mt-4 flex gap-3">
          <PhotoWell />
          <div className="min-w-0 flex-1 space-y-2">
            {textFields.map((field, index) => (
              <PlaceholderField key={field.token} token={field.token} selected={index === 0} />
            ))}
          </div>
        </div>
        <p className="mt-4 font-mono text-label text-muted">{visual.canvasHint}</p>
      </div>
    </div>
  );
}

function PlaceholderMapping({ visual }: { visual: IdCardVisual }) {
  return (
    <div className="schematic-plane-surface h-full rounded-md p-3 sm:p-4">
      <p className="kicker">{visual.mappingKicker}</p>
      <p className="mt-2 font-mono text-label text-muted">{visual.mappingHint}</p>
      <ul className="mt-4 grid gap-2">
        {visual.mappedFields.map((field) => (
          <li
            key={field.token}
            className="grid grid-cols-1 gap-1.5 min-[22.5rem]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[22.5rem]:items-center min-[22.5rem]:gap-2"
          >
            <span className="schematic-node-surface min-w-0 rounded-sm px-2 py-1.5 font-mono text-caption break-words text-ink">
              {field.source}
            </span>
            <span className="font-mono text-label text-muted" aria-hidden="true">
              →
            </span>
            {field.kind === 'photo' ? (
              <span className="schematic-placeholder min-w-0 rounded-sm px-2 py-1.5 font-mono text-caption break-all text-muted">
                {field.token}
              </span>
            ) : (
              <span className="schematic-placeholder min-w-0 rounded-sm px-2 py-1.5 font-mono text-caption break-all text-muted">
                {`{{${field.token}}}`}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureLayers({ visual }: { visual: IdCardVisual }) {
  return (
    <ol className="grid gap-3 md:grid-cols-3 xl:col-span-2">
      {visual.layers.map((layer) => (
        <li key={layer.name} className="schematic-plane-surface rounded-md p-3 sm:p-4">
          <p className="kicker">{layer.name}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {layer.nodes.map((node) => (
              <li
                key={node}
                className="schematic-node-surface rounded-sm px-2.5 py-1.5 font-mono text-caption break-words text-ink"
              >
                {node}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function PhotoWell() {
  return (
    <div
      className="schematic-placeholder flex size-16 shrink-0 items-center justify-center rounded-sm"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-7 text-accent" fill="none">
        <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M5.5 18.5c1.4-2.6 3.7-4 6.5-4s5.1 1.4 6.5 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function PlaceholderField({ token, selected = false }: { token: string; selected?: boolean }) {
  return (
    <p
      className={cn(
        'rounded-sm px-2 py-1 font-mono text-caption text-muted',
        selected ? 'schematic-node-surface' : 'schematic-placeholder',
      )}
    >
      {`{{${token}}}`}
    </p>
  );
}
