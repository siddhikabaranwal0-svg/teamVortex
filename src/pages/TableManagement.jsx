import React, { useState } from 'react';
import './TableManagement.css';

export default function TableManagement() {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="table-mgmt-container">
      {/* Page Header */}
      <div className="page-header flex-between border-bottom pb-3">
        <div>
          <h2 className="headline-md">Main Dining Room</h2>
          <p className="body-sm text-secondary">Currently operating at 75% capacity</p>
        </div>

        <div className="header-actions">
          {/* Legend */}
          <div className="legend-box">
            <div className="legend-item"><div className="dot available"></div> Available</div>
            <div className="legend-item"><div className="dot occupied"></div> Occupied</div>
            <div className="legend-item"><div className="dot reserved"></div> Reserved</div>
          </div>
          <button className="btn btn-secondary">
            <span className="material-symbols-outlined icon-18">tune</span> Filter
          </button>
          <button className="btn btn-primary">
            <span className="material-symbols-outlined icon-18">add</span> Add Walk-in
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="floor-grid">
        {/* Bird's Eye Canvas (Left) */}
        <div className="floor-canvas">
          <div className="floor-map">
            {/* Table 1: Available */}
            <div
              className="table-node round available"
              style={{ top: '40px', left: '40px' }}
              onMouseEnter={() => setSelectedTable('T1')}
              onMouseLeave={() => setSelectedTable(null)}
            >
              <span className="headline-sm text-secondary">T1</span>
              {selectedTable === 'T1' && (
                <div className="table-tooltip">
                  <div className="tooltip-header">
                    <span className="label-md">Table 1</span>
                    <span className="chip chip-neutral">Available</span>
                  </div>
                  <p className="body-sm text-secondary">Seats: 4</p>
                </div>
              )}
            </div>

            {/* Table 2: Occupied */}
            <div
              className="table-node rect occupied"
              style={{ top: '40px', left: '180px' }}
              onMouseEnter={() => setSelectedTable('T2')}
              onMouseLeave={() => setSelectedTable(null)}
            >
              <span className="headline-sm text-on-primary font-bold">T2</span>
              {selectedTable === 'T2' && (
                <div className="table-tooltip">
                  <div className="tooltip-header">
                    <span className="label-md">Table 2</span>
                    <span className="chip chip-primary">Occupied</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Seated:</span>
                    <span className="font-medium">45 mins</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Total:</span>
                    <span className="font-medium">$142.50</span>
                  </div>
                </div>
              )}
            </div>

            {/* Table 3: Reserved */}
            <div
              className="table-node round reserved"
              style={{ top: '40px', right: '40px' }}
              onMouseEnter={() => setSelectedTable('T3')}
              onMouseLeave={() => setSelectedTable(null)}
            >
              <span className="headline-sm text-on-error font-bold">T3</span>
              {selectedTable === 'T3' && (
                <div className="table-tooltip">
                  <div className="tooltip-header">
                    <span className="label-md">Table 3</span>
                    <span className="chip chip-danger">Reserved</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Time:</span>
                    <span className="font-medium">19:30</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Party:</span>
                    <span className="font-medium">Smith (4)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Booth 1: Occupied */}
            <div
              className="table-node booth occupied"
              style={{ bottom: '40px', left: '40px' }}
              onMouseEnter={() => setSelectedTable('B1')}
              onMouseLeave={() => setSelectedTable(null)}
            >
              <span className="headline-sm text-on-primary font-bold rotated">B1</span>
              {selectedTable === 'B1' && (
                <div className="table-tooltip tooltip-right">
                  <div className="tooltip-header">
                    <span className="label-md">Booth 1</span>
                    <span className="chip chip-primary">Occupied</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Seated:</span>
                    <span className="font-medium">1h 15m</span>
                  </div>
                  <div className="tooltip-row">
                    <span className="text-secondary">Total:</span>
                    <span className="font-medium">$315.00</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Controls & Info */}
        <div className="floor-sidebar card">
          {/* Quick Actions */}
          <div className="sidebar-section border-bottom">
            <h3 className="label-md text-on-surface mb-2">Quick Actions</h3>
            <button className="btn btn-secondary w-full text-primary border-primary">
              <span className="material-symbols-outlined icon-18">receipt_long</span> Quick Bill
            </button>
          </div>

          {/* Upcoming Reservations */}
          <div className="sidebar-section">
            <div className="flex-between mb-3">
              <h3 className="label-md text-on-surface">Upcoming Reservations</h3>
              <span className="chip chip-neutral font-bold">4</span>
            </div>

            <div className="reservations-list">
              {/* Item 1 */}
              <div className="res-card">
                <div className="res-row">
                  <span className="label-md">Smith Party</span>
                  <span className="label-sm text-primary font-bold">19:30</span>
                </div>
                <div className="res-row text-xs text-secondary mt-1">
                  <span className="flex-align"><span className="material-symbols-outlined icon-14">group</span> 4 guests</span>
                  <span className="chip chip-danger text-xs">T3</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="res-card">
                <div className="res-row">
                  <span className="label-md">Johnson</span>
                  <span className="label-sm text-on-surface">20:00</span>
                </div>
                <div className="res-row text-xs text-secondary mt-1">
                  <span className="flex-align"><span className="material-symbols-outlined icon-14">group</span> 2 guests</span>
                  <span className="chip chip-neutral text-xs">Unassigned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
