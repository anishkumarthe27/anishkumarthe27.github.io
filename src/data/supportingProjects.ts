import { caseStudyLabels } from '@/data/caseStudyLabels';
import type { SupportingProjectsContent } from '@/types/content';

export const supportingProjects: SupportingProjectsContent = {
  id: 'supporting-projects',
  title: 'Supporting projects',
  kicker: 'Supporting project',
  githubLinkLabel: 'GitHub',
  labels: caseStudyLabels,
  detailed: [
    {
      kind: 'brief',
      id: 'escort-management',
      title: 'Escort Management',
      summary:
        'Built from scratch as a school-operations module for recording who is authorized to pick up or drop off a student, tying that information to student workflows, and limiting who can access it.',
      problem:
        'The school needed a reliable record of who is authorized to collect a student, sitting with the student workflow rather than in informal notes.',
      implementation: [
        'Record escort/pickup person information',
        'Associate information with student workflows',
        'Provide controlled access',
        'Keep those records in school operations',
      ],
      value: [
        'Pickup and drop-off is a security boundary. The school needs a reliable record of who is authorized to collect a student, and that record has to sit with the student workflow rather than in informal notes.',
        'Controlled access limits who can see or change escort information. Operational tracking means following those records through school operations so pickup and drop-off can be accounted for. It is not a claim of live location tracking.',
      ],
    },
    {
      kind: 'brief',
      id: 'visitor-management',
      title: 'Visitor Management',
      summary:
        'Feature work on the school visitor workflow so staff and other visitors are recorded and identifiable when they enter the school.',
      problem:
        'Staff and other visitors entering school environments needed a recorded, identifiable entry workflow.',
      solution: 'Record visitor information when staff and others enter the school.',
      implementationTitle: 'Focus',
      implementation: [
        'Record visitor information',
        'Identify staff and other visitors on entry',
        'Keep a traceable record of who is on site',
        'Who is on site — not live location tracking',
      ],
      value: [
        'A recorded visitor workflow makes entry traceable and accountable. The work is information capture of who is on site — not live location tracking.',
      ],
    },
    {
      kind: 'brief',
      id: 'student-task-management',
      title: 'Student Task Management',
      summary:
        'Feature work on student task management: bulk operations, bulk updates, and UI changes so staff are not repeating the same update across many records.',
      problem:
        'Staff had to repeat the same task updates across many student records instead of handling them in bulk.',
      solution:
        'Bulk operations, bulk updates, and UI changes so staff are not repeating the same task update across many student records.',
      implementationTitle: 'Focus',
      implementation: ['Bulk operations', 'Bulk updates', 'UI changes'],
      valueTitle: 'Result',
      value: ['Fewer repeated task updates. Not a measured page or API response-time claim.'],
    },
  ],
  groups: [
    {
      id: 'sales-stock-staff-allocation',
      title: 'Sales, Stock & Staff Allocation',
      intro: 'Feature work on sales, stock, staff allocation, and reporting modules.',
      cards: [
        {
          id: 'sales-module',
          title: 'Sales',
          summary: 'Sales activity is recorded.',
        },
        {
          id: 'staff-allocation',
          title: 'Staff Allocation',
          summary: 'Staff assignments are visible from allocation data.',
        },
        {
          id: 'stock-management',
          title: 'Stock Management',
          summary: 'Stock position is visible.',
        },
        {
          id: 'operational-reporting',
          title: 'Reporting',
          summary: 'Operational records are turned into reports.',
        },
      ],
    },
  ],
  compact: [
    {
      id: 'inotepad',
      title: 'iNotepad',
    },
  ],
};
