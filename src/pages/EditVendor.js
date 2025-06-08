import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddVendor.css'; // same styling as AddVendor

function EditVendor() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    phone: '',
    category: ''
  });

  useEffect(() => {
    const vendors = JSON.parse(localStorage.getItem('vendors')) || [];
    if (vendors[index]) {
      setVendor(vendors[index]);
    } else {
      alert("Vendor not found");
      navigate('/vendor-list');
    }
  }, [index, navigate]);

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vendor.name || !vendor.email || !vendor.phone || !vendor.category) {
      alert("Please fill all fields");
      return;
    }

    const vendors = JSON.parse(localStorage.getItem('vendors')) || [];
    vendors[index] = vendor;
    localStorage.setItem('vendors', JSON.stringify(vendors));
    navigate('/vendor-list');
  };

  return (
    <div className="add-vendor-container">
      <h2 className="add-vendor-heading">Edit Vendor</h2>
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
          <button type="submit" className="save-btn">Update</button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/vendor-list')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditVendor;
