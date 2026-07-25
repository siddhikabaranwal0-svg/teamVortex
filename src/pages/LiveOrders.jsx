import React, { useState } from 'react';
import './LiveOrders.css';

export default function LiveOrders() {
  const [activeTab, setActiveTab] = useState('split');
  const [showRecommendation, setShowRecommendation] = useState(true);

  return (
    <div className="live-orders-container">
      {/* Page Header */}
      <div className="page-header flex-between">
        <div>
          <h1 className="headline-lg">Live Operations</h1>
          <p className="body-sm text-secondary mt-1">Real-time order tracking and kitchen management.</p>
        </div>

        {/* Smart Recommendation Banner */}
        {showRecommendation && (
          <div className="smart-rec-card">
            <div className="rec-icon">
              <span className="material-symbols-outlined icon-18">lightbulb</span>
            </div>
            <div className="rec-content">
              <h4 className="label-md">Smart Recommendation</h4>
              <p className="body-sm text-on-surface-variant">
                Suggest <strong>Chardonnay '21</strong> to Table 4 to pair with Salmon.
              </p>
            </div>
            <button className="btn-icon" onClick={() => setShowRecommendation(false)}>
              <span className="material-symbols-outlined icon-16">close</span>
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="tabs-header">
        <button
          className={`tab-btn ${activeTab === 'split' ? 'active' : ''}`}
          onClick={() => setActiveTab('split')}
        >
          Split View
        </button>
        <button
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Active Orders Only
        </button>
        <button
          className={`tab-btn ${activeTab === 'kitchen' ? 'active' : ''}`}
          onClick={() => setActiveTab('kitchen')}
        >
          Kitchen Queue Only
        </button>
      </div>

      {/* Split Grid */}
      <div className="live-grid">
        {/* Left Column: Active Orders Table */}
        {(activeTab === 'split' || activeTab === 'orders') && (
          <div className={`card orders-table-card ${activeTab === 'orders' ? 'full-width' : ''}`}>
            <div className="card-header">
              <h2 className="headline-sm">Active Orders</h2>
              <button className="btn-link">
                <span className="material-symbols-outlined icon-16">filter_list</span> Filter
              </button>
            </div>

            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Table</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">#1042</td>
                    <td>T-04</td>
                    <td className="text-secondary">12m</td>
                    <td><span className="chip chip-warning">Preparing</span></td>
                    <td className="text-right">
                      <button className="btn-icon"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">#1043</td>
                    <td>T-12</td>
                    <td className="text-error font-medium">24m</td>
                    <td><span className="chip chip-warning">Preparing</span></td>
                    <td className="text-right">
                      <button className="btn-icon"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">#1044</td>
                    <td>Bar-2</td>
                    <td className="text-secondary">3m</td>
                    <td><span className="chip chip-neutral">New</span></td>
                    <td className="text-right">
                      <button className="btn-icon"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="highlight-row">
                    <td className="font-bold">#1041</td>
                    <td>T-08</td>
                    <td className="text-secondary">18m</td>
                    <td><span className="chip chip-success">Ready</span></td>
                    <td className="text-right">
                      <button className="btn btn-primary btn-sm">Serve</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Right Column: Kitchen Queue Kanban */}
        {(activeTab === 'split' || activeTab === 'kitchen') && (
          <div className={`card kitchen-kanban-card ${activeTab === 'kitchen' ? 'full-width' : ''}`}>
            <div className="card-header">
              <h2 className="headline-sm flex-align">
                <span className="material-symbols-outlined text-primary">local_fire_department</span>
                Kitchen Queue
              </h2>
            </div>

            <div className="kanban-columns">
              {/* Column 1: Prep */}
              <div className="kanban-col">
                <h3 className="label-sm text-secondary uppercase mb-2">Prep (2)</h3>

                {/* Ticket 1 */}
                <div className="ticket-card">
                  <div className="ticket-header">
                    <div>
                      <span className="font-bold text-body-md">#1042</span>
                      <span className="text-secondary text-xs ml-2">T-04</span>
                    </div>
                    <span className="ticket-timer">12m</span>
                  </div>
                  <ul className="ticket-items">
                    <li><span className="font-bold">2x</span> Grilled Salmon</li>
                    <li className="text-error text-xs ml-4">* No Asparagus, sub side salad</li>
                  </ul>
                  <button className="btn btn-secondary w-full mt-3">Mark Ready</button>
                </div>

                {/* Ticket 2 */}
                <div className="ticket-card ticket-urgent">
                  <div className="ticket-header">
                    <div>
                      <span className="font-bold text-body-md">#1043</span>
                      <span className="text-secondary text-xs ml-2">T-12</span>
                    </div>
                    <span className="ticket-timer urgent animate-pulse">24m</span>
                  </div>
                  <ul className="ticket-items">
                    <li><span className="font-bold">1x</span> Ribeye Steak (Med Rare)</li>
                    <li><span className="font-bold">1x</span> Truffle Fries</li>
                  </ul>
                  <button className="btn btn-secondary w-full mt-3">Mark Ready</button>
                </div>
              </div>

              {/* Column 2: Ready */}
              <div className="kanban-col">
                <h3 className="label-sm text-secondary uppercase mb-2">Ready (1)</h3>

                {/* Ticket 3 */}
                <div className="ticket-card ticket-ready">
                  <div className="ticket-header">
                    <div>
                      <span className="font-bold text-emerald-900">#1041</span>
                      <span className="text-emerald-700 text-xs ml-2">T-08</span>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600 icon-18">check_circle</span>
                  </div>
                  <ul className="ticket-items text-emerald-800 line-through">
                    <li>1x Caesar Salad</li>
                    <li>1x Calamari</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
