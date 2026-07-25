import React from 'react';
import './InventoryOps.css';

export default function InventoryOps() {
  return (
    <div className="inv-ops-container">
      {/* Page Header */}
      <div className="page-header flex-between">
        <div>
          <h1 className="headline-lg">Operations Command</h1>
          <p className="body-md text-secondary mt-1">
            Real-time oversight of inventory, staff, and current billing.
          </p>
        </div>
        <div className="flex-align gap-2">
          <button className="btn btn-secondary">
            <span className="material-symbols-outlined icon-18">download</span> Export Report
          </button>
          <button className="btn btn-primary">
            <span className="material-symbols-outlined icon-18">add</span> New Entry
          </button>
        </div>
      </div>

      <div className="inv-grid">
        {/* Left Column: Inventory (8 cols) */}
        <div className="inv-left-col">
          {/* Inventory AI Intelligence Card */}
          <div className="card ai-inv-card">
            <div className="card-header flex-between border-none">
              <div className="flex-align gap-3">
                <div className="ai-badge">
                  <span className="material-symbols-outlined icon-20">auto_awesome</span>
                </div>
                <div>
                  <h2 className="headline-sm">Inventory Intelligence</h2>
                  <p className="label-sm text-secondary">AI Forecast & Risk Analysis</p>
                </div>
              </div>
              <span className="chip chip-success">
                <span className="material-symbols-outlined icon-14">trending_up</span> High Demand Expected
              </span>
            </div>

            <div className="risk-cards-grid">
              <div className="risk-card border-danger">
                <div className="flex-between">
                  <span className="label-md">Truffle Oil</span>
                  <span className="material-symbols-outlined text-error icon-18">warning</span>
                </div>
                <div className="mt-2">
                  <div className="headline-md text-error">Critical</div>
                  <div className="body-sm text-secondary">Stock-out predicted in 12h</div>
                </div>
              </div>

              <div className="risk-card border-warning">
                <div className="flex-between">
                  <span className="label-md">Wagyu Beef A5</span>
                  <span className="material-symbols-outlined text-primary icon-18">info</span>
                </div>
                <div className="mt-2">
                  <div className="headline-md text-primary">Low</div>
                  <div className="body-sm text-secondary">Reorder suggested today</div>
                </div>
              </div>

              <div className="risk-card border-neutral">
                <div className="flex-between">
                  <span className="label-md">Saffron</span>
                  <span className="material-symbols-outlined text-secondary icon-18">update</span>
                </div>
                <div className="mt-2">
                  <div className="headline-md text-on-surface">Forecast</div>
                  <div className="body-sm text-secondary">+40% usage weekend</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Stock Table */}
          <div className="card">
            <div className="card-header flex-between">
              <h2 className="headline-sm">Live Stock Levels</h2>
              <button className="btn-icon"><span className="material-symbols-outlined">filter_list</span></button>
            </div>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th className="text-right">Stock Level</th>
                    <th>Unit</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Truffle Oil</td>
                    <td className="text-secondary">Pantry</td>
                    <td className="text-right font-mono">1.2</td>
                    <td className="text-secondary">Liters</td>
                    <td className="text-center"><span className="chip chip-danger">Critical</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">Wagyu Beef A5</td>
                    <td className="text-secondary">Meat</td>
                    <td className="text-right font-mono">4.5</td>
                    <td className="text-secondary">kg</td>
                    <td className="text-center"><span className="chip chip-warning">Low</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">Arborio Rice</td>
                    <td className="text-secondary">Dry Goods</td>
                    <td className="text-right font-mono">45.0</td>
                    <td className="text-secondary">kg</td>
                    <td className="text-center"><span className="chip chip-success">Healthy</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">Heavy Cream</td>
                    <td className="text-secondary">Dairy</td>
                    <td className="text-right font-mono">12.5</td>
                    <td className="text-secondary">Liters</td>
                    <td className="text-center"><span className="chip chip-success">Healthy</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">Microgreens</td>
                    <td className="text-secondary">Produce</td>
                    <td className="text-right font-mono">0.8</td>
                    <td className="text-secondary">kg</td>
                    <td className="text-center"><span className="chip chip-warning">Low</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Staff & Billing (4 cols) */}
        <div className="inv-right-col">
          {/* Active Shift Staff */}
          <div className="card">
            <div className="card-header flex-between">
              <h2 className="headline-sm">Active Shift</h2>
              <span className="chip chip-primary font-bold">DINNER</span>
            </div>
            <div className="staff-list">
              <div className="staff-item">
                <div className="staff-avatar">
                  <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=150" alt="Chef Marcus" />
                </div>
                <div className="staff-info">
                  <span className="label-md">Marcus R.</span>
                  <span className="label-sm text-secondary">Head Chef</span>
                </div>
                <div className="staff-status">
                  <span className="rating"><span className="material-symbols-outlined icon-14 text-primary">star</span> 4.9</span>
                  <span className="text-xs text-success flex-align"><span className="material-symbols-outlined icon-14">schedule</span> On Time</span>
                </div>
              </div>

              <div className="staff-item">
                <div className="staff-avatar">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" alt="Server Sarah" />
                </div>
                <div className="staff-info">
                  <span className="label-md">Sarah J.</span>
                  <span className="label-sm text-secondary">Lead Server</span>
                </div>
                <div className="staff-status">
                  <span className="rating"><span className="material-symbols-outlined icon-14 text-primary">star</span> 4.8</span>
                  <span className="text-xs text-success flex-align"><span className="material-symbols-outlined icon-14">schedule</span> On Time</span>
                </div>
              </div>

              <div className="staff-item">
                <div className="staff-avatar-placeholder">DT</div>
                <div className="staff-info">
                  <span className="label-md">David T.</span>
                  <span className="label-sm text-secondary">Floor Manager</span>
                </div>
                <div className="staff-status">
                  <span className="rating"><span className="material-symbols-outlined icon-14 text-primary">star</span> 5.0</span>
                  <span className="text-xs text-error flex-align"><span className="material-symbols-outlined icon-14">warning</span> Overtime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Settlement Billing */}
          <div className="card settlement-card">
            <div className="card-header flex-between border-bottom">
              <h2 className="headline-sm">Quick Settlement</h2>
              <span className="material-symbols-outlined text-primary">point_of_sale</span>
            </div>
            <div className="settlement-body">
              <div className="settlement-row border-bottom pb-3">
                <div>
                  <span className="label-sm text-secondary uppercase">Current Open Table</span>
                  <h3 className="headline-md">Table 42</h3>
                </div>
                <div className="text-right">
                  <span className="label-sm text-secondary uppercase">Amount Due</span>
                  <h3 className="headline-lg text-primary">$245.50</h3>
                </div>
              </div>
              <div className="payment-options mt-3">
                <button className="pay-btn">
                  <span className="material-symbols-outlined text-secondary">payments</span>
                  <span className="label-sm">Cash</span>
                </button>
                <button className="pay-btn">
                  <span className="material-symbols-outlined text-secondary">credit_card</span>
                  <span className="label-sm">Card</span>
                </button>
                <button className="pay-btn">
                  <span className="material-symbols-outlined text-secondary">qr_code_scanner</span>
                  <span className="label-sm">UPI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
