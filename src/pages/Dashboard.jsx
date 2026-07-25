import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Page Header */}
      <div className="page-header fade-in-up">
        <div>
          <h2 className="headline-lg">Dashboard</h2>
          <p className="body-sm text-on-surface-variant">
            Real-time overview of today's operations.
          </p>
        </div>
        <button className="btn btn-secondary">Generate Report</button>
      </div>

      {/* KPI Bento Grid */}
      <div className="kpi-grid">
        {/* KPI 1 */}
        <div className="card kpi-card fade-in-up delay-100">
          <div className="kpi-card-top">
            <div className="kpi-icon-wrapper primary-tint">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="chip chip-success">
              <span className="material-symbols-outlined icon-14">trending_up</span> +12%
            </span>
          </div>
          <div>
            <p className="label-md text-on-surface-variant">Today's Revenue</p>
            <h3 className="headline-lg">$4,250<span className="body-sm text-on-surface-variant">.00</span></h3>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="card kpi-card fade-in-up delay-200">
          <div className="kpi-card-top">
            <div className="kpi-icon-wrapper secondary-tint">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <span className="label-sm text-on-surface-variant">vs yesterday</span>
          </div>
          <div>
            <p className="label-md text-on-surface-variant">Total Orders</p>
            <h3 className="headline-lg">124</h3>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="card kpi-card fade-in-up delay-300">
          <div className="kpi-card-top">
            <div className="kpi-icon-wrapper tertiary-tint">
              <span className="material-symbols-outlined">table_restaurant</span>
            </div>
            <span className="chip chip-primary">Busy</span>
          </div>
          <div>
            <p className="label-md text-on-surface-variant">Available Tables</p>
            <div className="flex-align-end">
              <h3 className="headline-lg">8</h3>
              <p className="body-md text-on-surface-variant">/ 25</p>
            </div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="card kpi-card fade-in-up delay-400">
          <div className="kpi-card-top">
            <div className="kpi-icon-wrapper error-tint">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <span className="chip chip-danger">Action Needed</span>
          </div>
          <div>
            <p className="label-md text-on-surface-variant">Low Stock Items</p>
            <h3 className="headline-lg">3</h3>
          </div>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <div className="dashboard-main-grid">
        {/* Left Column: Charts & Popular Dishes */}
        <div className="dashboard-left-col">
          {/* Sales Overview Chart Card */}
          <div className="card chart-card fade-in-up delay-400">
            <div className="card-header">
              <div>
                <h3 className="headline-sm">Sales Overview</h3>
                <p className="body-sm text-on-surface-variant">Hourly revenue breakdown</p>
              </div>
              <div className="button-group">
                <button className="btn-segmented active">Today</button>
                <button className="btn-segmented">Week</button>
              </div>
            </div>
            <div className="chart-body">
              {/* Y-axis labels */}
              <div className="chart-y-axis">
                <span>$1k</span>
                <span>$750</span>
                <span>$500</span>
                <span>$250</span>
                <span>0</span>
              </div>
              {/* Grid lines & Area SVG */}
              <div className="chart-area">
                <div className="grid-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line border-bottom"></div>
                </div>
                <svg className="svg-chart" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q10,70 20,75 T40,40 T60,50 T80,20 T100,30 L100,100 L0,100 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,80 Q10,70 20,75 T40,40 T60,50 T80,20 T100,30"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* X-axis labels */}
              <div className="chart-x-axis">
                <span>10am</span>
                <span>12pm</span>
                <span>2pm</span>
                <span>4pm</span>
                <span>6pm</span>
                <span>8pm</span>
              </div>
            </div>
          </div>

          {/* Popular Dishes Card */}
          <div className="card dishes-card fade-in-up delay-500">
            <div className="card-header">
              <h3 className="headline-sm">Popular Dishes</h3>
              <button className="btn-link">
                View Full Menu <span className="material-symbols-outlined icon-16">arrow_forward</span>
              </button>
            </div>
            <div className="dishes-list">
              {/* Item 1 */}
              <div className="dish-item">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=150"
                  alt="Grilled Atlantic Salmon"
                  className="dish-img"
                />
                <div className="dish-info">
                  <div className="dish-title-row">
                    <span className="label-md">Grilled Atlantic Salmon</span>
                    <span className="label-md">42 orders</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill primary-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="dish-item">
                <div className="dish-img-placeholder">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <div className="dish-info">
                  <div className="dish-title-row">
                    <span className="label-md">Truffle Mushroom Risotto</span>
                    <span className="label-md">36 orders</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill tertiary-fill" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="dish-item">
                <div className="dish-img-placeholder">
                  <span className="material-symbols-outlined">local_pizza</span>
                </div>
                <div className="dish-info">
                  <div className="dish-title-row">
                    <span className="label-md">Margherita Flatbread</span>
                    <span className="label-md">28 orders</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill tertiary-fill" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Insights */}
        <div className="dashboard-right-col fade-in-up delay-500">
          <div className="ai-insights-panel card">
            <div className="ai-header">
              <div className="ai-title flex-align">
                <span className="material-symbols-outlined">auto_awesome</span>
                <h3 className="headline-sm text-on-primary">AI Insights</h3>
              </div>
              <p className="body-sm text-primary-fixed-dim">Powered by predictive analytics</p>
            </div>

            <div className="ai-content">
              {/* Insight 1 */}
              <div className="insight-card border-primary">
                <div className="flex-start">
                  <span className="material-symbols-outlined text-primary icon-20">trending_up</span>
                  <div>
                    <h4 className="label-md">Demand Forecasting</h4>
                    <p className="body-sm text-on-surface-variant mt-1">
                      Expect a <strong>15% increase</strong> in walk-ins tonight due to local event. Recommend adding +1 server.
                    </p>
                  </div>
                </div>
                <div className="flex-end mt-3">
                  <button className="btn-chip btn-chip-primary">Adjust Staffing</button>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="insight-card border-danger">
                <div className="flex-start">
                  <span className="material-symbols-outlined text-error icon-20">shopping_cart_checkout</span>
                  <div>
                    <h4 className="label-md">Inventory Prediction</h4>
                    <p className="body-sm text-on-surface-variant mt-1">
                      Current chicken stock will deplete by 7 PM. Order <strong>20kg by 2PM</strong> to ensure dinner service.
                    </p>
                  </div>
                </div>
                <div className="flex-end mt-3">
                  <button className="btn btn-danger btn-sm">Place Order</button>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="insight-card border-tertiary">
                <div className="flex-start">
                  <span className="material-symbols-outlined text-tertiary icon-20">restaurant_menu</span>
                  <div>
                    <h4 className="label-md">Menu Optimization</h4>
                    <p className="body-sm text-on-surface-variant mt-1">
                      'Seasonal Salad' sales are down 22% this week. Consider running a lunch promotion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
