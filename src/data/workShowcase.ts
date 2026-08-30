import { getMediaByIds } from '@/data/portfolioMedia';
import type { WorkShowcaseContent, WorkShowcaseGroup } from '@/types/content';

export const workShowcase: WorkShowcaseContent = {
  id: 'work-showcase',
  title: 'Work showcase',
  intro:
    'Screenshots grouped by module. Dummy and demo data was created for demonstration and testing. Open any image for a larger view.',
  groups: [
    {
      id: 'asset-management',
      title: 'Asset Management',
      description:
        'Lifecycle, valuation, dashboards, and operational asset records from the from-scratch asset module.',
      mediaIds: [
        'asset-mobile-add-and-list',
        'asset-lifecycle-workflow',
        'asset-dashboard-overview',
        'asset-valuation-dashboard',
        'asset-details',
        'asset-depreciation-ledger',
        'asset-scan-tag',
        'asset-add-form',
        'asset-category-value-scale',
        'asset-category-value-chart',
        'asset-yearly-depreciation-trend',
      ],
    },
    {
      id: 'procurement',
      title: 'Procurement and purchase orders',
      description: 'Procurement launchpad, delivery challan, and purchase-order list and lifecycle.',
      mediaIds: [
        'procurement-overview',
        'goods-delivery-challan',
        'purchase-order-list',
        'purchase-order-details',
      ],
    },
    {
      id: 'budget',
      title: 'Budget Management',
      description:
        'Allocation, category consumption, and indent-to-invoice activity against a budget.',
      mediaIds: [
        'budget-category-consumption',
        'budget-indent-to-invoice-ledger',
        'budget-allocation-report',
        'budget-subcategory-movement',
        'budget-quarterly-chart',
        'budget-monthly-chart',
        'budget-category-detail-chart',
      ],
    },
    {
      id: 'payment-vouchers',
      title: 'Payment vouchers',
      description: 'Voucher list, create stepper, completed record, and failed-payment reissue.',
      mediaIds: [
        'payment-voucher-list',
        'payment-voucher-add',
        'payment-voucher-details',
        'payment-details',
        'payment-reprocess',
        'payment-reissue-history',
      ],
    },
    {
      id: 'workflows',
      title: 'Workflows and approvals',
      description: 'Process diagrams for invoice, voucher, and payment status including reissue.',
      mediaIds: [
        'invoice-processing-workflow',
        'voucher-processing-workflow',
        'payment-processing-workflow',
        'payment-status-lifecycle',
      ],
    },
    {
      id: 'inventory',
      title: 'Inventory',
      description:
        'Store KPIs, item issue / student sale, and stock transaction summary. Feature work on existing catalog, sales, and stock modules.',
      mediaIds: [
        'inventory-dashboard',
        'inventory-item-issue',
        'inventory-transaction-summary',
        'inventory-kpi-cards',
      ],
    },
    {
      id: 'examination',
      title: 'Examination module overview',
      description:
        'Staff path: hub and templates, then generate / pre-validate / post-validate, published report card, status, and class analytics. Existing-system contribution — not parent-facing Assessment for Learning. Dummy and demo data.',
      mediaIds: [
        'exam-marks-analysis',
        'examination-module-hub',
        'report-card-nodes-order',
        'exam-report-card-workflow',
        'exam-pre-validation',
        'exam-post-validation',
        'exam-generated-report-card',
        'exam-workflow-status-report',
        'report-card-workflow-history',
        'exam-subject-performance-table',
        'exam-year-comparison-table',
        'exam-graphical-analysis',
        'exam-score-distribution-chart',
        'hallticket-builder',
      ],
    },
    {
      id: 'task-management',
      title: 'Task Management',
      description: 'Student task list and details, plus a My Tasks status widget.',
      mediaIds: ['student-task-details', 'my-tasks-status'],
    },
    {
      id: 'escort',
      title: 'Escort Management',
      description:
        'Parent escort requests and staff check-in / check-out, plus authorized pickup selection. Escort was built from scratch. Dummy and demo data.',
      mediaIds: [
        'escort-parent-requests',
        'escort-staff-check-in-out',
        'escort-selection',
        'student-checkin',
      ],
    },
  ],
};

export function resolveShowcaseGroup(group: WorkShowcaseGroup) {
  return {
    ...group,
    items: getMediaByIds(group.mediaIds),
  };
}
