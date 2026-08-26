import { LifecycleSchematic } from '@/components/capabilities/LifecycleSchematic';
import { Section } from '@/components/layout/Section';
import { systemLifecycle } from '@/data/capabilities';

export function CapabilitiesSection() {
  return (
    <Section id="capabilities" title={systemLifecycle.title} description={systemLifecycle.intro}>
      <LifecycleSchematic />
    </Section>
  );
}
