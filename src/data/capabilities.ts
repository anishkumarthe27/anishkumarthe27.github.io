import type { SystemLifecycle } from '@/types/content';

export const systemLifecycle: SystemLifecycle = {
  title: 'How I Build Systems',
  intro:
    'This is the path of the work on modules I built from scratch and on existing systems I extended. System design decisions were made collaboratively with the Product Lead.',
  kicker: 'System lifecycle',
  stages: [
    { step: '01', name: 'Requirements & Research' },
    { step: '02', name: 'System Design' },
    { step: '03', name: 'Database Design' },
    { step: '04', name: 'Backend Architecture' },
    { step: '05', name: 'Frontend Implementation' },
    { step: '06', name: 'Workflow & Authorization' },
    { step: '07', name: 'Testing' },
    { step: '08', name: 'Performance Optimization' },
    { step: '09', name: 'Deployment' },
  ],
};
