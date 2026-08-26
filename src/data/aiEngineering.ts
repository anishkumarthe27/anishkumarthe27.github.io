import type { AiEngineeringContent } from '@/types/content';

export const aiEngineering: AiEngineeringContent = {
  title: 'AI-Assisted Engineering',
  intro: 'I use AI while writing code. It does not independently design or build systems.',
  ownership: 'I own technical decisions, validation, and integration. AI assists implementation.',
  toolsTitle: 'Tools used',
  tools: ['Cursor', 'Augment', 'GitHub Copilot', 'ChatGPT', 'DeepSeek'],
  usesTitle: 'Where it is used',
  uses: [
    'Code generation',
    'Architecture exploration',
    'Documentation',
    'Refactoring',
    'Test/scenario generation',
    'Limited SQL/query optimization',
  ],
};
