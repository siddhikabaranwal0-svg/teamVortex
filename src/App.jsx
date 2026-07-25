import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import LiveOrders from './pages/LiveOrders';
import TableManagement from './pages/TableManagement';
import InventoryOps from './pages/InventoryOps';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<LiveOrders />} />
          <Route path="/tables" element={<TableManagement />} />
          <Route path="/inventory" element={<InventoryOps />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
