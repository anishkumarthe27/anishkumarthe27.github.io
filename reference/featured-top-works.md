# Featured / Top Work ranking

Evaluated from files already in `public/portfolio/media/` plus `src/data/portfolioMedia.ts`.
Portfolio UI was not changed.

Criteria: complexity, functional breadth, business value, workflow complexity, system-design evidence, module integration, visual clarity, real engineering signal, differentiation from basic CRUD.

Not selected for looks alone. Demo data quality (₹1 chairs, empty remarks) was ignored when the *structure* of the screen still showed real process.

Ownership note used when ranking: Asset, procurement, budget, voucher, and escort were built from scratch. Examination, student tasks, and inventory/sales sit on existing modules with feature work. That does not hide a strong screen, but it keeps those items secondary.

---

## Ranked list (10)

### 1. Asset lifecycle workflow — **primary**

| | |
|---|---|
| **Title** | End-to-end asset lifecycle |
| **Category** | Asset Management + Workflow |
| **Asset** | `/portfolio/media/projects/asset-management/diagrams/asset-lifecycle-workflow.png` |
| **Why it is strong** | One diagram shows tag strategy, optional allocate-on-save, inventory/challan mapping, warranty/AMC/insurance, depreciation, allocate/repair loop, and disposal into contracts/value reports. That is a product, not a form. |
| **Engineering capability** | Domain modeling, branching workflows, lifecycle/state design, and how asset records connect to inventory, finance, and reporting. |
| **Position** | Rank 1 — lead Featured item or first visual on the Asset case study |

### 2. Budget category consumption — **primary**

| | |
|---|---|
| **Title** | Budget consumption across purchasing |
| **Category** | Budget Management |
| **Asset** | `/portfolio/media/projects/budget/screenshots/budget-category-consumption.png` |
| **Why it is strong** | Allocated / requisition / PO / invoiced / available on one row. Budget is visibly sitting in the buying path, not a standalone spreadsheet. Totals make the control story readable. |
| **Engineering capability** | Cross-module aggregation, committed vs remaining money, financial reporting that depends on live procurement states. |
| **Position** | Rank 2 — Featured pair with procurement |
| **Companion (not a separate rank)** | `budget-indent-to-invoice-ledger.png` — event-level audit of the same path. Use in the Budget case study, not as a second Featured hero. |

### 3. Asset depreciation ledger — **primary**

| | |
|---|---|
| **Title** | Depreciation schedule and net book value |
| **Category** | Asset Management |
| **Asset** | `/portfolio/media/projects/asset-management/screenshots/asset-depreciation-ledger.png` |
| **Why it is strong** | Straight-line method, opening/depreciation/closing by financial year, current book value, next run date. This is valuation logic, not an asset list. |
| **Engineering capability** | Time-based calculation, scheduled periods, carry-forward balances, finance-facing presentation. |
| **Position** | Rank 3 — Featured or first detail image after the lifecycle diagram |

### 4. Procurement module hub — **primary**

| | |
|---|---|
| **Title** | Procurement operations surface |
| **Category** | Procurement |
| **Asset** | `/portfolio/media/projects/procurement/screenshots/procurement-overview.png` |
| **Why it is strong** | Item, inventory, vendor, contracts, indent, PO, delivery, invoice, budget, sales year, voucher, and bank accounts in one map. Depth is elsewhere; this is the breadth proof. |
| **Engineering capability** | Multi-module product surface, information architecture, a purchasing system rather than one screen. |
| **Position** | Rank 4 — Featured opener for the procurement/platform story |

### 5. Payment failure and reissue history — **primary**

| | |
|---|---|
| **Title** | Failed payment, reissue, and penalty trail |
| **Category** | Payment/Voucher + Workflow |
| **Asset** | `/portfolio/media/projects/other/screenshots/payment-reissue-history.png` |
| **Why it is strong** | TXN-16 failed (insufficient funds) → reissued → TXN-17 initiated with a separate penalty and a link back to payment 16. Exception path, not the happy form. |
| **Engineering capability** | Transaction state machines, failure reasons, retry with a new record, penalty stored apart from the original amount, audit history. |
| **Position** | Rank 5 — Featured “finance exception” item |

### 6. Asset record and lifecycle actions — **primary**

| | |
|---|---|
| **Title** | Asset detail and lifecycle actions |
| **Category** | Asset Management |
| **Asset** | `/portfolio/media/projects/asset-management/screenshots/asset-details.png` |
| **Why it is strong** | One record with allocation, insurance, warranty, AMC, depreciation, history — plus actions for unallocate, repair, lost, broken, dispose, donate, sell. The process is in the UI, not only in a diagram. |
| **Engineering capability** | Entity with many related records, status-driven actions, operational vs disposal paths. |
| **Position** | Rank 6 — Featured supporting image next to depreciation / lifecycle |

### 7. Invoice processing workflow — **secondary**

| | |
|---|---|
| **Title** | PO to delivery and invoice approval |
| **Category** | Workflow/Approval + Invoice + Purchase Orders |
| **Asset** | `/portfolio/media/featured/workflows/invoice-processing-workflow.png` |
| **Why it is strong** | After PO approval the flow splits: goods/challan/ready-for-allocation vs invoice create → optional approval → reject loops to create. Shows parallel operational and finance tracks. |
| **Engineering capability** | Conditional approval, rejection loops, module handoff (PO, delivery, invoice, inventory). |
| **Position** | Rank 7 — secondary Featured or workflow strip. Prefer this diagram over the thinner PO-lifecycle modal (`purchase-order-details.png` has only one timeline event). |

### 8. Hall ticket template builder — **secondary**

| | |
|---|---|
| **Title** | Hall ticket builder |
| **Category** | Other (examination / document builder) |
| **Asset** | `/portfolio/media/projects/other/screenshots/hallticket-builder.png` |
| **Why it is strong** | Canvas, toolbox, layers, live/preview, and `{{dynamic}}` fields. This is a builder, not a table. Closest visual cousin to the ID-card canvas story. |
| **Engineering capability** | Template composition, placeholder mapping, editor state (zoom, undo, preview, make live). |
| **Ownership caveat** | Examination is existing-system work. Do not present this as a from-scratch module or as the ID Card case study unless you later confirm it is the same builder. |
| **Position** | Rank 8 — secondary Featured “builder” highlight |

### 9. Report-card calculation node order — **secondary**

| | |
|---|---|
| **Title** | Report-card node order |
| **Category** | Workflow + Dashboards/Reporting (examination) |
| **Asset** | `/portfolio/media/projects/other/screenshots/report-card-nodes-order.png` |
| **Why it is strong** | Ordered derived assessments, computed fields, and aggregates with drag-to-reorder, lock/confirm for SuperAdmin, and history. Calculation graph, not a marks grid. |
| **Engineering capability** | Configurable computation order, typed nodes, guarded mutation of locked academic data. |
| **Ownership caveat** | Staff-side examination tool. Not the parent-facing Assessment for Learning view. Existing-system contribution. |
| **Position** | Rank 9 — secondary Featured or Examination case-study visual |

### 10. Inventory item issue — **secondary**

| | |
|---|---|
| **Title** | Item issue / student sale |
| **Category** | Inventory |
| **Asset** | `/portfolio/media/projects/inventory/screenshots/inventory-item-issue.png` |
| **Why it is strong** | Student lookup (RFID / admission / enrollment), live stock, line items, totals/discount, payment, print receipt. A transaction that crosses student records, stock, and payment. |
| **Engineering capability** | Multi-source lookup, stock-aware lines, transactional checkout. |
| **Ownership caveat** | Item catalog / sales / stock were existing modules with feature work, not the from-scratch procurement core. |
| **Position** | Rank 10 — inventory representation; `inventory-dashboard.png` is a cleaner KPI card if you need a quieter thumbnail |

---

## Area coverage

| Area | In the top 10? | How |
|---|---|---|
| Asset Management | Yes | Ranks 1, 3, 6 |
| Procurement | Yes | Rank 4 |
| Purchase Orders | Yes (via workflow) | Rank 7; PO modal is weaker |
| Budget Management | Yes | Rank 2 |
| Inventory | Yes | Rank 10 |
| Approval/Workflow | Yes | Ranks 1, 5, 7, 9 |
| Dashboards/Reporting | Partial | Rank 2 is a report; asset dashboard is *not* ranked (see below) |
| Task Management | No as a hero | Strong enough for the Task case study only |
| Other interesting work | Yes | Ranks 5, 8 |

## Explicitly not in the Featured set

| Asset | Why it lost |
|---|---|
| `asset-dashboard-overview.png` | Clear cards, but mixed with attendance/admissions and small demo NBV. Weaker engineering signal than ledger + lifecycle. |
| `asset-category-value-scale.png` | Good volume cue; still a chart, not a system. |
| `asset-scan-tag.png` | Distinctive, narrow. Gallery image, not a Featured lead. |
| `purchase-order-details.png` | Right idea (PO vs voucher balance) but the timeline is one event. Rank 7 diagram is stronger. |
| `payment-voucher-add.png` | Honest multi-step voucher + approvers; less differentiating than reissue history. |
| `student-task-details.png` | Solid master-detail. Typical CRUD+list compared with nodes/builder/ledger. Use in Task Management, not Featured. |
| `escort-selection.png` | From-scratch and clear; smaller domain than finance/asset. Keep on the Escort card. |
| `examination-module-hub.png` | Launchpad only. |

## Suggested Featured section shape (for later UI work)

**Primary row (6):** lifecycle diagram · budget consumption · depreciation ledger · procurement hub · payment reissue · asset details

**Secondary row (4):** invoice workflow · hall ticket builder · report-card nodes · item issue

Copy for Featured should stay evidence-based: no invented metrics, no stack names the screenshot does not show, and existing-system items (8–10) labeled as contributions where the rest of the site already does.
