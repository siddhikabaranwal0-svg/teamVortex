import React from 'react';
import './TopNav.css';

export default function TopNav({ onToggleSidebar }) {
  return (
    <header className="topnav">
      <div className="topnav-left">
        <button className="btn-icon mobile-menu-btn" onClick={onToggleSidebar} aria-label="Toggle Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="search-box">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search orders, tables, items..."
          />
        </div>
      </div>

      <div className="topnav-right">
        <button className="topnav-action-btn help-btn">
          <span className="material-symbols-outlined">help</span>
          <span>Help</span>
        </button>

        <button className="btn-icon notification-btn" aria-label="Notifications">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-badge"></span>
        </button>

        <button className="btn-icon" aria-label="AI Assistant">
          <span className="material-symbols-outlined">smart_toy</span>
        </button>

        <div className="profile-avatar">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
            alt="Manager Profile"
          />
        </div>
      </div>
    </header>
  );
}
