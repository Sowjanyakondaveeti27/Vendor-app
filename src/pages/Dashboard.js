import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditVendor from './EditVendor'; // adjust path if needed
import VendorList from './VendorList'; // adjust path if needed
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import './Dashboard.css';



const Dashboard = () => {
  const [vendorCount, setVendorCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'vendors'));
        setVendorCount(snapshot.size);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-overlay">
        <div className="dashboard-header">
          <h1>Welcome, <strong>Sowjanya 👋</strong></h1>
          <p>Manage your vendors efficiently from here.</p>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h2>Total Vendors</h2>
            <p>{vendorCount}</p>
            <button onClick={() => navigate('/vendor-list')}>Go to Vendor List</button>
          </div>

          <div className="clickable">
            <h2>Add New Vendor</h2>
            <button onClick={() => navigate('/edit-vendor/:index')}>Add Vendor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
