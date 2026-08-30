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
      id: 'gallery-management-parent-visibility',
      title: 'Gallery Management & Parent Visibility',
      kicker: 'Existing-system contribution',
      summary:
        'Extended an existing Gallery system to provide staff-side management and parent-facing visibility, with usability, performance, and documentation improvements. The database and core design were already in place — not a from-scratch module.',
      problem:
        'Staff needed to manage gallery information, and parents needed to see the relevant gallery content in the application rather than only on the staff side.',
      solution:
        'Implemented and enhanced Gallery on the staff side, connected the existing data and design to a parent-facing view, and documented how staff and parents use it. Performance work was included where it was required — not a measured percentage.',
      implementationTitle: 'Key highlights',
      implementation: [
        'Staff-side Gallery management',
        'Parent-side Gallery visibility',
        'Existing-system integration',
        'Performance improvements',
        'Staff documentation',
        'Parent documentation',
      ],
      valueTitle: 'Contribution',
      value: [
        'Work was on an existing enterprise module: reading the current database and design, then extending it so gallery content is available to parents as well as staff.',
        'Staff documentation covers how to access and manage the gallery. Parent documentation covers how to access and view gallery information.',
      ],
    },
    {
      kind: 'brief',
      id: 'assessment-for-learning',
      title: 'Assessment for Learning',
      kicker: 'Existing-system contribution',
      summary:
        'Implemented the parent-facing Assessment for Learning experience on the existing school-operations platform so parents can see broader student development than academic marks alone. The database and core design were already in place — not a from-scratch module.',
      problem:
        'Parents needed visibility into school-based developmental and performance observations from more than one staff role, in one student view, rather than academic results only.',
      solution:
        'Integrated the existing assessment data and design into the parent-side interface, organized so parents can read their student\'s overall assessment, and documented the feature for staff and parents. Performance work was included where it was required — not a measured percentage.',
      implementationTitle: 'Key highlights',
      implementation: [
        'Parent-facing student assessment',
        'Academic performance',
        'Physical development',
        'Behavioral observations',
        'Mental and developmental observations',
        'Teacher feedback',
        'Multi-role assessment visibility',
        'Staff and parent documentation',
        'Performance improvements',
      ],
      valueTitle: 'School-based observations',
      value: [
        'These are school-based developmental and performance observations — not a medical or clinical assessment. Academic and subject notes can include understanding, speaking and communication, and attention in class. Physical development can include physical health and games or sports. Mental and behavioral notes can include mental-health-related observations, personality development, behavior, and interaction with others. Other notes can include meditation or mindfulness-related assessment, classroom participation, teacher feedback, and overall development.',
        'Observations can come from staff, class teacher, subject teacher, games teacher, and discipline teacher. Those views sit together on the student profile so parents see development beyond marks.',
        'Staff documentation covers how to access the feature and how to provide or update assessment information. Parent documentation covers how to access the student view and how to read the available performance information.',
      ],
    },
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
