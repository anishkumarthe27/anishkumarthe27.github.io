import type { SkillsContent } from '@/types/content';

export const skills: SkillsContent = {
  id: 'skills',
  title: 'Technical skills',
  intro:
    'Labels describe how I have used each skill in practice. They are not scores or percentages.',
  levels: ['professional', 'hands-on', 'familiar', 'beginner'],
  levelLabels: {
    professional: 'Professional experience',
    'hands-on': 'Hands-on',
    familiar: 'Familiar',
    beginner: 'Beginner',
  },
  groups: [
    {
      name: 'Frontend',
      items: [
        { name: 'HTML5', level: 'professional' },
        { name: 'CSS3', level: 'professional' },
        { name: 'JavaScript ES6+', level: 'professional' },
        { name: 'React', level: 'professional' },
        { name: 'Redux Toolkit', level: 'hands-on' },
        { name: 'Bootstrap', level: 'professional' },
        { name: 'jQuery', level: 'professional' },
        { name: 'Tailwind CSS', level: 'hands-on' },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'PHP', level: 'professional' },
        { name: 'CodeIgniter', level: 'professional' },
        { name: 'Node.js', level: 'professional' },
        { name: 'Express.js', level: 'professional' },
      ],
    },
    {
      name: 'Databases',
      items: [
        { name: 'MySQL', level: 'professional' },
        { name: 'PostgreSQL', level: 'professional' },
        { name: 'MongoDB', level: 'professional' },
        { name: 'Redis', level: 'professional' },
      ],
    },
    {
      name: 'Visualization / Libraries',
      items: [
        { name: 'Mermaid', level: 'hands-on' },
        { name: 'Google Charts', level: 'hands-on' },
        { name: 'Morris', level: 'hands-on' },
        { name: 'QR code libraries', level: 'hands-on' },
        { name: 'PDF generation', level: 'hands-on' },
        { name: 'MSG91', level: 'hands-on' },
      ],
    },
    {
      name: 'Tools',
      items: [
        { name: 'Git', level: 'professional' },
        { name: 'GitHub', level: 'professional' },
        { name: 'Apache', level: 'professional' },
        { name: 'Thunder Client', level: 'hands-on' },
        { name: 'Docker', level: 'beginner' },
        { name: 'Linux', level: 'beginner' },
        { name: 'CI/CD', level: 'beginner' },
      ],
    },
  ],
};
