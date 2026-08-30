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
      'School operations for the same schools span procurement, budget, asset management, examinations, ID cards, gallery, assessment for learning, and other modules on one live platform rather than in isolated tools.',
    solution:
      'I built ten modules from scratch and contributed improvements and features to nine existing ones. Procurement, budget, asset management, examination reporting, and ID cards are covered in the following case studies.',
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
          'Asset Management',
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
          'Gallery',
          'Assessment for Learning',
        ],
      },
    ],
    securityTitle: 'Access and authorization',
    securityIntro:
      'Session and authorization concepts used on the platform. Names only — not an internal design. Escort Management is the concrete access example: who is authorized to collect a student, with controlled access, not live location tracking.',
    security: ['JWT', 'Sessions', 'Role-based authorization', 'Redis'],
    result: [
      'Ownership on this platform is split: ten modules built from scratch, and nine existing modules with feature work.',
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
    id: 'enterprise-asset-management',
    kicker: 'Case study',
    title: 'Enterprise Asset Management',
    summary:
      'Built from scratch, end to end: asset lifecycle from procurement and delivery through allocation, depreciation, maintenance, valuation, and disposal — including Excel import of legacy assets. Not an isolated asset form.',
    problem:
      'Assets needed to be tracked through their lifecycle on the same platform as procurement, rather than in disconnected records. That includes current book value, allocation and transfer across departments and locations, warranty, insurance, AMC (annual maintenance contract), repair, disposal, and bringing existing asset records into the system.',
    solution:
      'I designed the database structure and business workflow, then implemented the frontend and backend so asset records stay connected to procurement, organizational data, valuation, maintenance, and disposal. Legacy assets come in through Excel upload rather than being recreated by hand.',
    involvementIntro:
      'I implemented this module from scratch, end to end — database architecture, workflow design, frontend, and backend. Requirements and design decisions were collaborative with the Product Lead. I was responsible for this module\'s implementation, not for the company\'s overall platform architecture.',
    involvement: [
      'Requirements research',
      'Workflow design',
      'Database design',
      'Backend implementation',
      'Frontend implementation',
      'Depreciation and valuation logic',
      'Procurement integration',
      'Legacy Excel import',
      'Reporting',
      'History and audit tracking',
      'Lazy loading',
    ],
    modulesTitle: 'Key capabilities',
    moduleGroups: [
      {
        name: 'Asset Lifecycle',
        intro:
          'One connected lifecycle — creation through allocation, transfer, and disposal — not a set of isolated asset screens. Assets can be tied to department, location, and employee depending on the client\'s requirements.',
        items: [
          'Asset creation',
          'Editing and maintenance',
          'Allocation',
          'Transfer',
          'Department',
          'Location',
          'Employee',
          'Disposal',
        ],
      },
      {
        name: 'Depreciation & Valuation',
        intro:
          'Accounting-oriented asset valuation. Straight-line and declining methods, with configurable useful life, rate, and residual value. Schedules are generated automatically; net book value is calculated from that depreciation.',
        items: [
          'Straight-line depreciation',
          'Declining depreciation',
          'Automatic calculations',
          'Configurable useful life',
          'Configurable depreciation rate',
          'Configurable residual value',
          'Automatic schedule generation',
          'Net Book Value (NBV)',
          'Current asset value',
          'Depreciation update history',
        ],
      },
      {
        name: 'Contracts & Maintenance',
        intro: 'Warranty, insurance, AMC, and repair sit with the asset record.',
        items: [
          'Warranty management',
          'Insurance management',
          'AMC management',
          'Repair management',
        ],
      },
      {
        name: 'Procurement Integration',
        intro:
          'Asset records connect to the existing purchase-order and delivery path, including vendor and invoice associations. Purchase and disposal use approval workflows; repair does not.',
        items: [
          'Purchase Order',
          'Delivery',
          'Vendor',
          'Invoice',
          'Purchase approval',
          'Disposal approval',
        ],
      },
      {
        name: 'Data Migration',
        intro:
          'Existing asset records can be brought in through Excel upload rather than recreating every legacy asset by hand.',
        items: [
          'Asset details',
          'Allocation',
          'Depreciation',
          'Insurance',
          'Warranty',
          'AMC',
          'Serial numbers',
          'Tag numbers',
        ],
      },
      {
        name: 'Audit & Reporting',
        intro:
          'History is kept with the asset so changes can be traced. Reports give visibility into asset and lifecycle data.',
        items: [
          'Asset lifecycle history',
          'Asset change history',
          'Allocation and transfer history',
          'Depreciation update history',
          'Asset reports',
        ],
      },
    ],
    workflowKicker: 'Asset lifecycle',
    workflowBandSize: 4,
    workflow: [
      { step: '01', name: 'Purchase Order' },
      { step: '02', name: 'Delivery' },
      { step: '03', name: 'Registration' },
      { step: '04', name: 'Allocation / Transfer' },
      { step: '05', name: 'Valuation' },
      { step: '06', name: 'Warranty / Insurance / AMC' },
      { step: '07', name: 'Repair' },
      { step: '08', name: 'Disposal' },
    ],
    workflowNote:
      'Asset records connect to the existing purchase-order and delivery path. After registration, assets can be allocated or transferred between departments and locations. Depreciation feeds current net book value. Warranty, insurance, and AMC sit with the asset. Repairs are recorded with no approval workflow. Purchase and disposal go through approval; disposal closes the lifecycle.',
    capabilitiesTitle: 'Engineering highlights',
    capabilities: [
      'Built from scratch — full-stack, end to end',
      'Configurable straight-line and declining depreciation, with automatic schedules and net book value',
      'Excel import of legacy asset records',
      'Lazy loading for large, growing datasets',
      'Approval workflows for purchase and disposal — not for repair',
      'Asset reporting with lifecycle history and audit tracking',
    ],
    performanceIntro:
      'Designed to support large and continuously growing asset datasets, with lazy loading implemented for efficient data retrieval and UI rendering.',
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
      'Pre-validation and post-validation',
      'Automated report-card generation',
      'Student reports',
      'Staff performance reports',
      'Graphical analysis',
    ],
    workflowKicker: 'Reporting path',
    workflow: [
      { step: '01', name: 'Examination' },
      { step: '02', name: 'Templates' },
      { step: '03', name: 'Pre-validate' },
      { step: '04', name: 'Generate' },
      { step: '05', name: 'Post-validate' },
      { step: '06', name: 'Analysis' },
    ],
    workflowNote:
      'Marks move through templates, pre-validation, generation, and post-validation into student reports, with class and year-over-year analysis on that data.',
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
