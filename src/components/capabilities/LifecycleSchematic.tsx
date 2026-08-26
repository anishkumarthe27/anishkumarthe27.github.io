import { ProcessFlow } from '@/components/schematic/ProcessFlow';
import { systemLifecycle } from '@/data/capabilities';

export function LifecycleSchematic() {
  return <ProcessFlow kicker={systemLifecycle.kicker} stages={systemLifecycle.stages} />;
}
