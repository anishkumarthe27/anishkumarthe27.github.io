import { FlowArrow } from '@/components/schematic/FlowArrow';
import { hero } from '@/data/hero';

export function HeroArchitecture() {
  const { architecture } = hero;

  return (
    <div className="relative overflow-hidden rounded-md border border-line bg-raised shadow-xs">
      <div className="schematic-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative p-5 lg:p-6">
        <p className="kicker">{architecture.kicker}</p>
        {architecture.caption ? (
          <p className="mt-2 max-w-md text-caption text-muted">{architecture.caption}</p>
        ) : null}
        <div className="mt-4">
          {architecture.layers.map((layer, layerIndex) => (
            <div key={layer.name}>
              {layerIndex > 0 ? (
                <FlowArrow direction="down" className="mx-auto my-1 h-7 w-5" />
              ) : null}
              <div className="schematic-plane-surface rounded-md p-3 sm:p-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
