import type { MetricsContent } from '@/types/content';

export const metrics: MetricsContent = {
  id: 'impact',
  title: 'Measured result and platform scale',
  clarification:
    'The measured result is from examination report generation. The other figures are current live scale of the school-operations platform, not a personal user-growth claim.',
  resultKicker: 'Measured result',
  result: {
    label: 'Report page/API and processing time',
    value: '~50% faster',
  },
  scaleKicker: 'Platform scale',
  scaleClarification:
    'Current live scale of the school-operations platform, not a personal user-growth claim.',
  items: [
    { label: 'Schools', value: '175+' },
    { label: 'Users', value: '~120,000' },
    { label: 'Students', value: '~115,000' },
    { label: 'Employees', value: '~5,000' },
    { label: 'Modules', value: '100+' },
    { label: 'Transactions', value: '1 crore+' },
    { label: 'Vendors', value: '200+' },
    { label: 'Concurrent users', value: '1,000+' },
    { label: 'POs / invoices', value: '1,000+' },
  ],
};
