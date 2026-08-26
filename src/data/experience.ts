import { profile } from '@/data/profile';
import type { ExperienceContent } from '@/types/content';

export const experience: ExperienceContent = {
  id: 'experience',
  title: 'Professional experience',
  roles: [
    {
      company: profile.currentCompany.name,
      location: profile.currentCompany.location,
      role: profile.currentCompany.role,
      startDate: profile.startDate,
      startDateTime: '2022-09',
      endDate: 'Present',
      bullets: [
        'Build PHP/CodeIgniter services and APIs for procurement, budget, and school-operations modules, and Node.js/Express services for the in-house ID card platform.',
        'Design MySQL schemas and data models for procurement and budget, including how budget relates to purchase orders and vouchers.',
        'Contribute to system design collaboratively with the Product Lead — not as sole architect.',
        'Implement approval-connected workflows: indent → purchase order → delivery → invoice → payment voucher, with budget sitting in that purchasing path rather than as a separate process.',
        'Build operational UIs in HTML, CSS, JavaScript, Bootstrap, and jQuery, and a React canvas for ID card templates with drag-and-drop layout and ERP field mapping.',
        'Cut examination-report page/API response time and processing time by about 50% through MySQL query shape, indexing, and processing changes. Deploy production releases.',
        'Build from scratch: Vendor, Indent, Purchase Order, Delivery, Invoice, Vouchers, Budget, Escort, and ID Cards. Contribute features to Examination, Student Tasks, Visitor, Item Catalog, Sales, Staff Allocation, and Reporting.',
      ],
    },
  ],
};
