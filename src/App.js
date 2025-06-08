import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register1 from './pages/Register1';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import VendorList from './pages/VendorList';
import AddVendor from './pages/AddVendor';
import EditVendor from './pages/EditVendor';

function App() {
  return (
    <Router>
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto py-8 px-4">
        {
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/vendor-list" element={<ProtectedRoute><VendorList /></ProtectedRoute>} />
        <Route path="/add-vendor" element={<ProtectedRoute><AddVendor /></ProtectedRoute>} />
        <Route path="/edit-vendor/:index" element={<ProtectedRoute><EditVendor /></ProtectedRoute>} />
      </Routes>
      }
    </div>
  </div>
</Router>
  );
}

export default App;
