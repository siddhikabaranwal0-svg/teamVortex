import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/orders', label: 'Live Orders', icon: 'receipt_long' },
  { path: '/tables', label: 'Table Management', icon: 'table_restaurant' },
  { path: '/inventory', label: 'Inventory & Staff', icon: 'inventory_2' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <nav className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        {/* Header / Logo */}
        <div className="sidebar-header">
          <div className="logo-container">
            <span className="material-symbols-outlined logo-icon">restaurant_menu</span>
          </div>
          <div>
            <h1 className="brand-title">Fresh Bowl</h1>
            <p className="brand-subtitle">Executive Suite</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-list">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
              onClick={onClose}
              end={item.path === '/'}
            >
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              <span className="label-md">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Settings Footer */}
        <div className="sidebar-footer">
          <a href="#settings" className="nav-item">
            <span className="material-symbols-outlined nav-icon">settings</span>
            <span className="label-md">Settings</span>
          </a>
        </div>
      </nav>
    </>
  );
}
