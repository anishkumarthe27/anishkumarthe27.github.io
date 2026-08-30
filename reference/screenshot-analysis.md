# Screenshot analysis

Source: `reference/screenshots/`  
Originals were copied here only. They were not moved, renamed, or deleted.

Recommended destination folders use the existing tree under `public/portfolio/media/`. Payment/voucher, invoice, vendor, examination, and escort do not have their own project folders, so those map to `projects/other/` or a related existing folder (procurement, task-management, featured/workflows).

UI was not changed.

---

## Do not use for the media library

These are GitHub / deploy / debug captures, not product screenshots.

| Filename | Category | Feature | Destination | Featured | Reason |
|---|---|---|---|---|---|
| `Screenshot_2026-08-26_at_10.02.42.png` | Other | GitHub Pages settings (older repo URL live) | — | No | Third-party hosting UI, not your product |
| `Screenshot_2026-08-26_at_21.24.59.png` | Other | GitHub Pages settings (user-site URL live) | — | No | Same as above |
| `Screenshot_2026-08-26_at_21.47.59.png` | Other | GitHub Actions workflow run list | — | No | CI host UI, not a product feature |
| `Screenshot_2026-08-26_at_21.49.07.png` | Other | Cancelled GitHub Actions build log | — | No | Failed/cancelled job log |
| `Screenshot_2026-08-26_at_21.57.50.png` | Other | Browser console MIME-type error on live site | — | No | Broken-page debug, not a showcase |

---

## Asset Management

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_20.30.48.png` | Asset Management + Dashboard/Reporting | Asset health, status, renewals, NBV cards on school dashboard | dashboard | Yes | Yes | `featured/asset-management/` or `featured/dashboards/` | Clear asset KPIs (allocated, repair, warranty/AMC/insurance, NBV) in a card dashboard |
| `Screenshot_2026-08-28_at_20.34.01.png` | Asset Management + Dashboard/Reporting | Asset valuation KPIs: cost, current value, depreciation, AMC | dashboard | Yes | Yes | `projects/asset-management/screenshots/` + copy to `featured/dashboards/` | Period filter, NBV date, export — finance view of assets |
| `Screenshot_2026-08-28_at_20.34.17.png` | Asset Management + Dashboard/Reporting | Category-wise current value bar + status donut | chart / dashboard | Moderate | No | `projects/asset-management/screenshots/` | Same chart type as `20.46.40` but tiny demo numbers (₹270 / 23 assets) |
| `Screenshot_2026-08-28_at_20.37.11.png` | Asset Management | Add Asset form (tag, category, purchase date) | form | Yes | No | `projects/asset-management/screenshots/` | Mobile add-asset; good supporting form, less “hero” than scan modal |
| `Screenshot_2026-08-28_at_20.37.28.png` | Asset Management | Scan Asset Tag: barcode/QR or OCR | form / other | Yes | Yes | `projects/asset-management/screenshots/` | Camera scan + OCR is a distinctive implementation detail visible on screen |
| `Screenshot_2026-08-28_at_20.40.44.png` | Asset Management | Asset View: allocation, insurance/warranty/AMC/depreciation/history tabs + lifecycle actions | detail page | Yes | Yes | `projects/asset-management/screenshots/` | Shows the full asset record and lifecycle actions (allocate, repair, dispose, donate, sell) |
| `Screenshot_2026-08-28_at_20.45.02.png` | Asset Management | Depreciation ledger: straight-line schedule, NBV, periods | detail page / table | Yes | Yes | `projects/asset-management/screenshots/` | Matches the portfolio’s depreciation/NBV story with a visible schedule |
| `Screenshot_2026-08-28_at_20.46.40.png` | Asset Management + Dashboard/Reporting | Category value bars + status donut at scale (₹275,909 / 5,938 assets) | chart / dashboard | Yes | Yes | `featured/dashboards/` | Stronger than `20.34.17` — real volume, clean charts |
| `Screenshot_2026-08-28_at_20.47.00.png` | Asset Management + Dashboard/Reporting | Yearly depreciation trend (claimed vs trend) | chart | Yes | No | `projects/asset-management/screenshots/` | Good chart; data is mostly zero then one spike — weaker as a featured hero |
| `Screenshot_2026-08-28_at_20.49.03.png` | Asset Management + Workflow/Approval | End-to-end asset lifecycle diagram (tags, allocate, contracts, depreciation, dispose) | process diagram | Yes | Yes | `featured/workflows/` and `projects/asset-management/diagrams/` | Best single diagram of the asset module |

---

## Inventory

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_20.31.29.png` | Inventory | Store/Inventory KPI cards (SKU, vendors, in stock, threshold, stock amount) | dashboard | Yes | Yes | `featured/inventory/` | Clean inventory summary widget |
| `Screenshot_2026-08-28_at_22.11.29.png` | Inventory | Item transaction summary (purchases, sales, remaining qty) | detail page / table | Yes | No | `projects/inventory/screenshots/` | Clear stock math; better as a project detail than a hero |
| `Screenshot_2026-08-28_at_22.13.17.png` | Inventory | Item Issue / student sale: lookup, line items, payment | form / workflow | Yes | Yes | `projects/inventory/screenshots/` | Combines student lookup, stock, and checkout |
| `Screenshot_2026-08-29_at_14.20.10.png` | Inventory + Dashboard/Reporting | Store KPIs + category stock details table | dashboard / table | Yes | Yes | `featured/inventory/` | Broader than `20.31.29` (adds category breakdown). Prefer this if you pick one inventory featured image |

---

## Procurement / Purchase Orders / Delivery

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_22.02.38.png` | Procurement | Procurement launchpad (item, inventory, vendor, indent, PO, delivery, invoice, budget, voucher) | dashboard | Yes | Yes | `featured/procurement/` | Shows the full procurement surface in one screen |
| `Screenshot_2026-08-28_at_22.02.49.png` | Procurement | Same launchpad (near-duplicate of `22.02.38`) | dashboard | Yes | No | skip or same folder as backup | Duplicate; keep one |
| `Screenshot_2026-08-28_at_22.31.47.png` | Purchase Orders + Dashboard/Reporting | PO Lifecycle Report list (filters, export, Open status) | report / table | Yes | No | `projects/purchase-orders/screenshots/` | Solid list/report; modal below is stronger as featured |
| `Screenshot_2026-08-28_at_22.32.13.png` | Purchase Orders + Workflow/Approval | PO Lifecycle modal: totals, voucher payments, timeline | detail page / workflow | Yes | Yes | `featured/purchase-orders/` or `projects/purchase-orders/screenshots/` | Compact lifecycle + money summary |
| `Screenshot_2026-08-28_at_22.34.01.png` | Procurement + Inventory | Add Goods Delivery Challan against PO (accepted/rejected qty) | form | Yes | No | `projects/procurement/screenshots/` | Delivery/challan form; important but dense |

---

## Budget Management

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_22.03.54.png` | Budget Management | Budget Allocation Report: category × month/quarter matrix | report / table | Yes | Yes | `projects/budget/screenshots/` | Dense allocation grid; good “connected to purchasing” evidence |
| `Screenshot_2026-08-28_at_22.04.36.png` | Budget Management + Dashboard/Reporting | Quarterly budget pie | chart / report | Moderate | No | `projects/budget/screenshots/` | Simple pie; weaker than the consumption tables |
| `Screenshot_2026-08-28_at_22.04.52.png` | Budget Management + Dashboard/Reporting | Monthly budget pie | chart / report | Moderate | No | `projects/budget/screenshots/` | Same as above, monthly cut |
| `Screenshot_2026-08-28_at_22.05.45.png` | Budget Management | Category consumption: allocated / requisition / PO / invoiced / available | report / table | Yes | Yes | `featured/budget-management/` | Shows budget sitting in the indent→PO→invoice path |
| `Screenshot_2026-08-28_at_22.06.29.png` | Budget Management | Sub-category money movement (incl. remaining, over-budget row) | report / table | Yes | Yes | `projects/budget/screenshots/` | More granular than category view; pick one of `22.05.45` / `22.06.29` as featured |
| `Screenshot_2026-08-28_at_22.06.55.png` | Budget Management + Procurement | Indent to Invoice Ledger (action, PO/indent, amounts, actor) | report / table | Yes | Yes | `projects/budget/screenshots/` | Best “budget ↔ procurement events” screenshot |
| `Screenshot_2026-08-28_at_22.08.04.png` | Budget Management | Category detail modal — month-wise pie | chart / detail page | Moderate | No | `projects/budget/screenshots/` | Supporting chart; even slices, less narrative |

---

## Payment / Voucher

No dedicated project folder. Use `projects/other/` or keep diagrams in `featured/workflows/`.

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_22.38.04.png` | Payment/Voucher | Payment Vouchers list (vendor, PO, invoice, status, export) | list/table | Yes | No | `projects/other/screenshots/` | Strong list; detail pages below are better heroes |
| `Screenshot_2026-08-28_at_22.39.02.png` | Payment/Voucher + Workflow/Approval | View Payment Voucher: invoices, NEFT payment, attachment, approver | detail page | Yes | Yes | `projects/other/screenshots/` | Complete voucher record in one view |
| `Screenshot_2026-08-28_at_22.40.33.png` | Payment/Voucher + Workflow/Approval | Add Payment Voucher stepper (Details → Invoices → Attachments → Approvers) | form / workflow | Yes | Yes | `projects/other/screenshots/` | Visible multi-step voucher workflow |
| `Screenshot_2026-08-28_at_22.46.32.png` | Payment/Voucher | Payment details modal (NEFT, bank, vendor instrument) | detail page | Yes | No | `projects/other/screenshots/` | Bank/instrument detail; supporting |
| `Screenshot_2026-08-28_at_22.55.39.png` | Payment/Voucher | Re-process failed payment (penalty, remarks) | form / workflow | Yes | No | `projects/other/screenshots/` | Near-duplicate of `22.55.57` |
| `Screenshot_2026-08-28_at_22.55.57.png` | Payment/Voucher | Same re-process modal (slightly fuller crop) | form / workflow | Yes | No | `projects/other/screenshots/` | Keep this one of the pair |
| `Screenshot_2026-08-28_at_22.58.00.png` | Payment/Voucher | Payment history: failed TXN → reissue + penalty | detail page / workflow | Yes | Yes | `projects/other/screenshots/` | Failure + reissue trail is the strongest payment-exception story |
| `Screenshot_2026-08-28_at_23.00.02.png` | Payment/Voucher + Workflow/Approval | Voucher processing diagram (cropped) | process diagram | Moderate | No | skip if `23.01.16` is kept | Incomplete crop of the next file |
| `Screenshot_2026-08-28_at_23.01.16.png` | Payment/Voucher + Workflow/Approval | Full voucher processing diagram (same vendor / totals / submit) | process diagram | Yes | Yes | `featured/workflows/` and `projects/other/` (no diagrams subfolder — use `featured/workflows/`) | Clearer than `23.00.02` |
| `Screenshot_2026-08-28_at_23.01.40.png` | Payment/Voucher + Workflow/Approval | Payment processing: approval, failure, bounce, reissue | process diagram | Yes | Yes | `featured/workflows/` | Matches the re-process / history screens |
| `Screenshot_2026-08-28_at_23.02.13.png` | Payment/Voucher + Workflow/Approval | Payment status lifecycle (pending → paid / failed / bounce → reissue) | process diagram | Yes | Yes | `featured/workflows/` | Compact status machine; very readable |
| `Screenshot_2026-08-28_at_23.04.07.png` | Invoice Management + Purchase Orders + Workflow/Approval | Invoice workflow from PO through delivery/challan and invoice approval | process diagram | Yes | Yes | `featured/workflows/` | Ties PO, delivery, and invoice in one diagram |

---

## Task Management / Assessment / Examination

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_23.07.10.png` | Task Management | Add/view student task (filters, list, details, clone) | list/table + detail page | Yes | Yes | `projects/task-management/screenshots/` | Matches the Student Task Management supporting project |
| `Screenshot_2026-08-29_at_14.18.58.png` | Task Management + Dashboard/Reporting | My Tasks donut (open / delegated / due / overdue) | dashboard / chart | Moderate | No | `projects/task-management/screenshots/` or `projects/dashboards-reporting/screenshots/` | Small widget; useful support image |
| `Screenshot_2026-08-28_at_23.22.55.png` | Workflow/Approval (examination / report card) | Student report-card workflow history | workflow / detail page | Yes | Yes | `projects/other/screenshots/` | State trail for report-card generation (not the parent AFL view) |
| `Screenshot_2026-08-28_at_23.23.41.png` | Workflow/Approval (examination) | Report-card node order (derived assessments, computed fields, aggregates) | workflow | Yes | Yes | `projects/other/screenshots/` | Shows calculation-order design, not parent-facing AFL |
| `Screenshot_2026-08-28_at_23.25.18.png` | Dashboard/Reporting (examination) | Examination hub: marks, report cards, hall tickets, analysis | dashboard | Yes | Yes | `featured/dashboards/` or `projects/dashboards-reporting/screenshots/` | Module map for examination/reporting work |
| `Screenshot_2026-08-28_at_23.26.36.png` | Other (examination / hall tickets) | Predefined Halltickets Builder (canvas + `{{dynamic}}` fields) | other (builder) | Yes | Yes | `projects/other/screenshots/` | Closest visual analog to the ID-card canvas story |

---

## Other (school operations: escort / check-in)

| Filename | Category | Feature | Type | Strong showcase | Featured | Recommended folder | Reason |
|---|---|---|---|---|---|---|---|
| `Screenshot_2026-08-28_at_23.20.21.png` | Other | Student check-in with parent cards | detail page / form | Moderate | No | `projects/other/screenshots/` | Parent visibility, but escort screen is clearer |
| `Screenshot_2026-08-28_at_23.20.33.png` | Other | Escort selection (parents, guardian, self, visitor/taxi) | form | Yes | Yes | `projects/other/screenshots/` | Matches Escort Management: authorized pickup people, not live tracking |

---

## Suggested featured set (if you keep it small)

Use these as the first featured images; treat the rest as project galleries.

1. `20.30.48` or `20.34.01` — asset dashboard  
2. `20.46.40` — asset charts at scale  
3. `20.45.02` — depreciation ledger / NBV  
4. `20.49.03` — asset lifecycle diagram  
5. `20.37.28` — scan / OCR  
6. `22.02.38` — procurement hub  
7. `22.05.45` or `22.06.55` — budget ↔ purchasing  
8. `22.32.13` — PO lifecycle  
9. `22.39.02` or `22.40.33` — voucher  
10. `22.58.00` — payment failure / reissue  
11. `23.02.13` or `23.04.07` — payment / invoice workflow diagram  
12. `14.20.10` — inventory dashboard  
13. `23.26.36` — hall ticket builder  
14. `23.20.33` — escort  

## Near-duplicates (keep one)

- `22.02.38` over `22.02.49`  
- `20.46.40` over `20.34.17` for featured charts  
- `22.55.57` over `22.55.39`  
- `23.01.16` over `23.00.02`  

## Notes (what the screenshots do *not* show)

- No implementation stack, library names, or performance percentages.  
- Examination / hall-ticket / report-card screens are staff-side tools. They are not the parent-facing Assessment for Learning view described in the portfolio.  
- Gallery parent-visibility is not in this set.  
- Payment/voucher and examination need `projects/other/` (or a new folder later) because those names are not in the current media tree.
