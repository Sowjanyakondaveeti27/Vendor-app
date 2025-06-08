import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddVendor.css'; // link to your plain CSS

function AddVendor() {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    phone: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vendor.name || !vendor.email || !vendor.phone || !vendor.category) {
      alert("Please fill all fields");
      return;
    }

    const existing = JSON.parse(localStorage.getItem('vendors')) || [];
    localStorage.setItem('vendors', JSON.stringify([...existing, vendor]));
    navigate('/vendor-list');
  };

  return (
    <div className="add-vendor-container">
      <h2 className="add-vendor-heading">Add New Vendor</h2>
      <form className="add-vendor-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={vendor.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={vendor.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={vendor.phone} onChange={handleChange} />
        </label>
        <label>
          Category:
          <select name="category" value={vendor.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Tech">Tech</option>
            <option value="Clothing">Clothing</option>
          </select>
        </label>
        <div className="button-group">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/vendor-list')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddVendor;
