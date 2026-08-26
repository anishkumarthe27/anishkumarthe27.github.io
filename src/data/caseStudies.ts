import { caseStudyLabels } from '@/data/caseStudyLabels';
import { phpCodeIgniterStack } from '@/data/stacks';
import type { FeaturedCaseStudiesContent, FlagshipCaseStudy } from '@/types/content';

const featuredStudies: readonly FlagshipCaseStudy[] = [
  {
    kind: 'flagship',
    id: 'school-management-operations',
    kicker: 'Platform case study',
    title: 'School Management & Operations Platform',
    summary:
      'A multi-module school operations platform. I built some modules from scratch and contributed improvements and features to others — not a claim that every module was a personal greenfield build.',
    problem:
      'School operations for the same schools span procurement, budget, examinations, ID cards, and other modules on one live platform rather than in isolated tools.',
    solution:
      'I built nine modules from scratch and contributed improvements and features to seven existing ones. Procurement, budget, examination reporting, and ID cards are covered in the following case studies.',
    visual: 'platform',
    platformVisual: {
      scopeKicker: 'Platform scope',
      scaleKicker: 'Scale',
    },
    includeScaleMetrics: false,
    moduleGroups: [
      {
        name: 'Built from scratch',
        intro: 'Modules I implemented from scratch.',
        items: [
          'Vendor',
          'Indent',
          'Purchase Order',
          'Delivery',
          'Invoice',
          'Vouchers',
          'Budget',
          'Escort',
          'ID Cards',
        ],
      },
      {
        name: 'Improvements and features',
        intro: 'Existing modules where I contributed improvements and features.',
        items: [
          'Examination',
          'Student Tasks',
          'Visitor',
          'Item Catalog',
          'Sales',
          'Staff Allocation',
          'Reporting',
        ],
      },
    ],
    securityTitle: 'Access and authorization',
    securityIntro:
      'Session and authorization concepts used on the platform. Names only — not an internal design. Escort Management is the concrete access example: who is authorized to collect a student, with controlled access, not live location tracking.',
    security: ['JWT', 'Sessions', 'Role-based authorization', 'Redis'],
    result: [
      'Ownership on this platform is split: nine modules built from scratch, and seven existing modules with feature work.',
    ],
    stackGroups: [
      {
        name: 'Backend',
        items: ['PHP', 'CodeIgniter', 'Node.js', 'Express.js'],
      },
      {
        name: 'Frontend',
        items: ['React', 'Redux Toolkit'],
      },
      {
        name: 'Data',
        items: ['MySQL', 'PostgreSQL', 'Redis'],
      },
    ],
  },
  {
    kind: 'flagship',
    id: 'procurement-purchase-management',
    kicker: 'Case study',
    title: 'Procurement & Purchase Management Platform',
    summary:
      'An integrated procurement system covering purchasing operations from request through payment. Vendor, indent, purchase order, delivery, invoice, and voucher modules were built from scratch. Item Catalog was existing work I contributed to. Approval workflows connect the operational modules.',
    problem:
      'The organization needed an integrated procurement workflow covering purchasing operations from request through payment.',
    involvementIntro:
      'I worked across research, database design, backend and frontend implementation, workflow implementation, integration, and deployment. System design decisions were made collaboratively with the Product Lead.',
    involvement: [
      'Research',
      'System design',
      'Database design',
      'Backend implementation',
      'Frontend implementation',
      'Workflow implementation',
      'Integration',
      'Deployment',
    ],
    modules: [
      'Item Catalog',
      'Vendor Management',
      'Indent Management',
      'Purchase Order Management',
      'Delivery Challan',
      'Invoice Management',
      'Payment Vouchers',
      'Approval Workflow',
    ],
    workflowKicker: 'Conceptual workflow',
    workflow: [
      { step: '01', name: 'Indent' },
      { step: '02', name: 'Approval' },
      { step: '03', name: 'Purchase Order' },
      { step: '04', name: 'Delivery' },
      { step: '05', name: 'Invoice' },
      { step: '06', name: 'Payment Voucher' },
    ],
    workflowNote:
      'Approval steps sit between modules. Work moves from indent through purchase order, delivery, invoice, and payment voucher after the required checks.',
    stackGroups: phpCodeIgniterStack,
  },
  {
    kind: 'flagship',
    id: 'budget-financial-workflow',
    kicker: 'Case study',
    title: 'Budget & Financial Workflow Management',
    summary:
      'Budget management built from scratch and connected to purchase orders and voucher management, so financial control sits in the purchasing workflow instead of a separate process.',
    problem:
      'Budget information needed to be integrated with purchasing and financial workflows rather than managed independently.',
    solution:
      'Built the budget management functionality from scratch and integrated it with purchase orders and voucher management.',
    involvementIntro:
      'Work spanned requirements through reporting, with the emphasis on how budget relates to purchasing and finance rather than on an isolated budget screen.',
    involvement: [
      'Requirements research',
      'Database design',
      'Frontend',
      'Backend',
      'Integration',
      'Approval workflow',
      'Reporting',
    ],
    relationshipsIntro:
      'Budget is related to purchasing and finance modules rather than standing alone.',
    relationships: [
      'Budget management',
      'Purchase orders',
      'Voucher management',
      'Approval workflow',
      'Reporting',
    ],
    workflowKicker: 'Business workflow',
    workflow: [
      { step: '01', name: 'Budget' },
      { step: '02', name: 'Purchase Order' },
      { step: '03', name: 'Voucher' },
      { step: '04', name: 'Approval' },
      { step: '05', name: 'Reporting' },
    ],
    workflowNote:
      'Budget sits upstream of purchasing and finance. Purchase orders and vouchers use that context; approval controls movement through the process; reporting reflects the resulting activity.',
    stackGroups: phpCodeIgniterStack,
  },
  {
    kind: 'flagship',
    id: 'examination-report-card-analytics',
    kicker: 'Case study',
    title: 'Examination, Report Card & Performance Analytics',
    summary:
      'Feature work on examination workflows, automated report-card generation, and performance analytics — not a from-scratch module. MySQL query, indexing, and processing work cut page/API response time and processing time by about half.',
    problem:
      'Examination workflows and report generation required excessive processing and user interaction.',
    involvementIntro:
      'Feature work on an existing examination and reporting path — not a from-scratch module.',
    modulesTitle: 'Implementation',
    modules: [
      'Examination workflow',
      'Report-card templates',
      'Automated report-card generation',
      'Student reports',
      'Staff performance reports',
      'Graphical analysis',
    ],
    workflowKicker: 'Reporting path',
    workflow: [
      { step: '01', name: 'Examination' },
      { step: '02', name: 'Templates' },
      { step: '03', name: 'Automated generation' },
      { step: '04', name: 'Student reports' },
      { step: '05', name: 'Staff reports' },
      { step: '06', name: 'Graphical analysis' },
    ],
    workflowNote:
      'Marks and reports move from the examination workflow through templates and automated generation into student and staff reports, with graphical analysis on that data.',
    performanceIntro:
      'The wait was in the data and generation path, not in the page chrome. The work targeted how reports were queried, indexed, and processed.',
    performance: [
      'MySQL query changes',
      'Indexing changes',
      'Processing changes',
      'Lower page/API response time',
      'Lower processing time',
      'Less time in the user workflow (not measured as 50%)',
    ],
    result: [
      'The measured outcome was about a 50% reduction in page/API response time and processing time.',
      'That figure is tied to those two measurements. Query shape and indexing reduced time spent in MySQL; processing changes reduced time spent building reports. It is not a claim that every screen or every step became 50% faster.',
      'User workflow time also decreased because report-card generation was automated and pages returned sooner. That reduction was not measured as 50%.',
    ],
    stackGroups: phpCodeIgniterStack,
  },
  {
    kind: 'flagship',
    id: 'id-card-generation-order-workflow',
    kicker: 'Case study',
    title: 'ID Card Design, Generation & Order Management Platform',
    summary:
      'Built from scratch as an in-house ID card platform. School orders move from existing ERP student data through canvas template design, generation, approval, and delivery — React on the canvas, Node.js on the backend.',
    problem:
      'The organization previously depended on an external vendor for student ID cards, while the ERP already contained the required student dataset.',
    objective: 'Bring the workflow in-house and use existing ERP data.',
    visual: 'id-card',
    idCardVisual: {
      architectureKicker: 'Platform architecture',
      templateKicker: 'Template canvas',
      mappingKicker: 'Placeholder mapping',
      mappingHint: 'ERP field → canvas',
      canvasHint: 'Drag-and-drop · mapped fields',
      layers: [
        {
          name: 'Interface',
          nodes: ['React canvas', 'Drag-and-drop', 'Placeholder mapping'],
        },
        {
          name: 'Application',
          nodes: ['Node.js', 'Express.js', 'Generation'],
        },
        {
          name: 'Data',
          nodes: ['ERP student dataset'],
        },
      ],
      mappedFields: [
        { source: 'Photo', token: 'photo', kind: 'photo' },
        { source: 'Name', token: 'name', kind: 'text' },
        { source: 'Class', token: 'class', kind: 'text' },
        { source: 'ID', token: 'id', kind: 'text' },
      ],
    },
    capabilitiesTitle: 'What was built',
    capabilities: [
      'Drag-and-drop canvas template design',
      'Externally supplied design mapping',
      'Placeholder mapping',
      'ERP dataset integration',
      'School/class dataset generation',
      'Sample generation',
      'Approval',
      'Final card generation',
      'Delivery workflow',
    ],
    workflowKicker: 'Order path',
    workflowBandSize: 5,
    workflow: [
      { step: '01', name: 'ERP Student Dataset' },
      { step: '02', name: 'School Order' },
      { step: '03', name: 'Class/Dataset Preparation' },
      { step: '04', name: 'Template Design' },
      { step: '05', name: 'Placeholder Mapping' },
      { step: '06', name: 'Sample Generation' },
      { step: '07', name: 'Verification' },
      { step: '08', name: 'Approval' },
      { step: '09', name: 'Final Generation' },
      { step: '10', name: 'Delivery' },
    ],
    workflowNote:
      'The platform starts from student records already in the ERP. Schools order against that data; templates are designed or mapped; samples are checked and approved; then cards are generated and delivered.',
    aiContribution: [
      'AI tools were used to assist frontend implementation and canvas drag-and-drop development.',
      'They did not independently design the system.',
    ],
    stackGroups: [
      {
        name: 'Frontend',
        items: ['React', 'JavaScript', 'canvas-based UI'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'Express.js'],
      },
      {
        name: 'Generation',
        items: ['JavaScript generation library'],
      },
    ],
  },
];

export const featuredCaseStudies: FeaturedCaseStudiesContent = {
  id: 'projects',
  title: 'Case studies',
  labels: caseStudyLabels,
  studies: featuredStudies,
};
