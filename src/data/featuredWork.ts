import { phpCodeIgniterStack } from '@/data/stacks';
import type {
  FeaturedTopWorkContent,
  FeaturedWorkCategory,
  FeaturedWorkItem,
} from '@/types/content';

export const featuredWorkCategoryLabels: Record<FeaturedWorkCategory, string> = {
  'asset-management': 'Asset Management',
  procurement: 'Procurement',
  'purchase-orders': 'Purchase Orders',
  budget: 'Budget Management',
  inventory: 'Inventory',
  'payment-voucher': 'Payment / Voucher',
  'task-management': 'Task Management',
  'dashboards-reporting': 'Dashboards / Reporting',
  workflow: 'Workflow / Approval',
  escort: 'Escort',
  other: 'Other',
};

const schoolOpsTechnologies = phpCodeIgniterStack
  .filter((group) => group.name !== 'Delivery')
  .flatMap((group) => group.items);

/**
 * Highlighted modules. Order is `priority`, not file location.
 * Paths point at files under `public/portfolio/media/`.
 */
export const featuredWorks: readonly FeaturedWorkItem[] = [
  {
    id: 'asset-management',
    title: 'Asset Management',
    category: 'asset-management',
    shortDescription:
      'Built from scratch: asset tagging, allocation, contracts, depreciation, and disposal as one lifecycle — not an isolated asset form.',
    detailedDescription:
      'The module covers tag-first or asset-first registration, allocation and transfer, warranty / AMC / insurance, straight-line and declining depreciation with net book value, repair without an approval step, and disposal with approval. Asset records connect to the purchase-order and delivery path.',
    coverImage: '/portfolio/media/projects/asset-management/diagrams/asset-lifecycle-workflow.png',
    video: '/portfolio/media/projects/asset-management/videos/asset-mobile-add-and-list.mp4',
    screenshots: [
      '/portfolio/media/projects/asset-management/screenshots/asset-depreciation-ledger.png',
      '/portfolio/media/projects/asset-management/screenshots/asset-details.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Lifecycle and state design',
      'Depreciation schedules and net book value',
      'Contracts and disposal on the same record',
    ],
    contribution:
      'Implemented the asset module from scratch, end to end. Requirements and design decisions were collaborative with the Product Lead.',
    highlights: [
      'End-to-end lifecycle including allocation, repair, and disposal',
      'Configurable depreciation with generated schedules',
      'Purchase and disposal approvals — not for repair',
    ],
    featured: true,
    priority: 1,
    relatedProject: 'enterprise-asset-management',
  },
  {
    id: 'procurement-management',
    title: 'Procurement Management',
    category: 'procurement',
    shortDescription:
      'Designed and implemented a procurement surface covering item, vendor, indent, purchase order, delivery, invoice, budget, and voucher entry points.',
    detailedDescription:
      'Vendor, indent, purchase order, delivery, invoice, and voucher were built from scratch. Item Catalog was existing work I contributed to. Approval steps sit between modules on the indent-to-payment path.',
    coverImage: '/portfolio/media/projects/procurement/screenshots/procurement-overview.png',
    screenshots: [
      '/portfolio/media/projects/procurement/screenshots/goods-delivery-challan.png',
      '/portfolio/media/projects/purchase-orders/screenshots/purchase-order-details.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Indent through payment voucher',
      'Delivery challan against a purchase order',
      'PO totals versus voucher payments',
    ],
    contribution:
      'Work spanned research, database design, backend and frontend, workflow, integration, and deployment. System design decisions were collaborative with the Product Lead.',
    highlights: [
      'One operations map for the purchasing path',
      'Goods delivery challan with accepted and rejected quantity',
      'Purchase-order lifecycle with voucher balance',
    ],
    featured: true,
    priority: 2,
    relatedProject: 'procurement-purchase-management',
  },
  {
    id: 'budget-management',
    title: 'Budget Management',
    category: 'budget',
    shortDescription:
      'Built from scratch and connected to purchasing so allocated, requisition, purchase-order, and invoiced amounts sit in one consumption view.',
    detailedDescription:
      'Budget is integrated with purchase orders and voucher management. Consumption and the indent-to-invoice ledger show committed versus remaining money against live procurement actions.',
    coverImage: '/portfolio/media/projects/budget/screenshots/budget-category-consumption.png',
    screenshots: [
      '/portfolio/media/projects/budget/screenshots/budget-indent-to-invoice-ledger.png',
      '/portfolio/media/projects/budget/screenshots/budget-allocation-report.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Cross-module budget totals',
      'Committed versus remaining amounts',
      'Indent-to-invoice event ledger',
    ],
    contribution:
      'Built budget management from scratch and integrated it with purchase orders and voucher management.',
    highlights: [
      'Allocated / requisition / PO / invoiced / available on one row',
      'Ledger of indent and PO actions against the budget',
      'Category allocation matrix',
    ],
    featured: true,
    priority: 3,
    relatedProject: 'budget-financial-workflow',
  },
  {
    id: 'payment-approval-workflows',
    title: 'Purchase orders and payment workflows',
    category: 'workflow',
    shortDescription:
      'Approval-connected purchasing and voucher flows, including failed-payment reissue with a penalty stored separately from the original amount.',
    detailedDescription:
      'After purchase-order approval, delivery and invoice can run as parallel tracks. Payment vouchers include invoices, attachments, and approvers. Failed payments can be reissued as a linked transaction.',
    coverImage: '/portfolio/media/featured/workflows/invoice-processing-workflow.png',
    screenshots: [
      '/portfolio/media/projects/other/screenshots/payment-reissue-history.png',
      '/portfolio/media/projects/other/screenshots/payment-voucher-add.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Conditional invoice approval',
      'Failed-payment reissue',
      'Voucher stepper with approvers',
    ],
    contribution:
      'Implemented approval-connected procurement workflows from indent through purchase order, delivery, invoice, and payment voucher, including payment-exception handling.',
    highlights: [
      'Invoice approval and reject-to-recreate',
      'Failed transaction linked to a reissue',
      'Add-voucher steps: details, invoices, attachments, approvers',
    ],
    featured: true,
    priority: 4,
    relatedProject: 'procurement-purchase-management',
  },
  {
    id: 'examination-tools',
    title: 'Examination module overview',
    category: 'dashboards-reporting',
    shortDescription:
      'Feature work on the existing examination path: generate and validate report cards, then read class results — not a from-scratch module.',
    detailedDescription:
      'The staff path runs generate, pre-validate, and post-validate before a report card is published. Analysis covers subject tables, year-over-year PT1 comparison, and score-range charts. Hall-ticket templates and report-card node order sit on the same examination path. This is not the parent-facing Assessment for Learning view.',
    coverImage: '/portfolio/media/projects/examination/screenshots/exam-report-card-workflow.png',
    video: '/portfolio/media/projects/examination/videos/exam-marks-analysis.mp4',
    screenshots: [
      '/portfolio/media/projects/examination/screenshots/exam-generated-report-card.png',
      '/portfolio/media/projects/examination/screenshots/exam-graphical-analysis.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Generate, pre-validate, post-validate, publish',
      'Print-ready report cards',
      'Class and year-over-year analysis',
    ],
    contribution:
      'Feature work on the existing examination and reporting path — not a from-scratch module.',
    highlights: [
      'Report-card workflow with pre- and post-validation',
      'Generated student report card from that workflow',
      'Graphical analysis across academic years',
    ],
    featured: true,
    priority: 5,
    relatedProject: 'examination-report-card-analytics',
  },
  {
    id: 'escort-management',
    title: 'Escort Management',
    category: 'escort',
    shortDescription:
      'Built from scratch: authorized pickup records on the staff path, plus parent escort requests — not live location tracking.',
    detailedDescription:
      'Staff student-tracking covers check-in and check-out with parent cards. The parent app lists escort requests with status, students, and cancel authorization. This is a record of who may collect a student, not GPS tracking.',
    coverImage: '/portfolio/media/projects/other/screenshots/escort-selection.png',
    video: '/portfolio/media/projects/escort/videos/escort-parent-requests.mp4',
    screenshots: [
      '/portfolio/media/projects/escort/videos/escort-staff-check-in-out.mp4',
      '/portfolio/media/projects/other/screenshots/student-checkin.png',
    ],
    technologies: schoolOpsTechnologies,
    capabilities: [
      'Authorized escort records',
      'Staff check-in and check-out',
      'Parent escort requests',
    ],
    contribution:
      'Built escort management from scratch. Requirements and design decisions were collaborative with the Product Lead.',
    highlights: [
      'Parent escort requests with status and cancel authorization',
      'Staff check-in / check-out with parent cards',
      'Pickup authorization stored with the student workflow',
    ],
    featured: true,
    priority: 6,
    relatedProject: 'escort-management',
  },
];

export const featuredTopWork: FeaturedTopWorkContent = {
  id: 'featured-work',
  title: 'Highlighted work',
  kicker: 'Top work',
  intro:
    'Modules that show connected business systems — asset lifecycle, procurement, budget, examination reporting, and escort — rather than isolated forms.',
  labels: {
    highlights: 'Engineering highlights',
    contribution: 'Contribution',
    technology: 'Technology',
    viewProject: 'View case study',
    viewScreenshots: 'View media',
  },
  items: featuredWorks,
};

export function getOrderedFeaturedWorks(
  items: readonly FeaturedWorkItem[] = featuredWorks,
): FeaturedWorkItem[] {
  return items
    .filter((item) => item.featured)
    .slice()
    .sort((a, b) => a.priority - b.priority);
}
