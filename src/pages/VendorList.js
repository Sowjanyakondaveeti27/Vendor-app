import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VendorList.css'; // link to your plain 
const categoryImages = {
  food: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  tech: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
  clothing: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
};


function VendorList() {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vendors')) || [];
    setVendors(data);
  }, []);

  const handleDelete = (index) => {
    const updated = vendors.filter((_, i) => i !== index);
    setVendors(updated);
    localStorage.setItem('vendors', JSON.stringify(updated));
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filterCategory || vendor.category === filterCategory)
  );

  return (
    <div className="vendor-container">
      <h1 className="vendor-heading">Vendor List</h1>
      <div className="vendor-controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Tech">Tech</option>
          <option value="Clothing">Clothing</option>
        </select>
        <button className="add-button" onClick={() => navigate('/add-vendor')}>
          ➕ Add Vendor
        </button>
      </div>

      {filteredVendors.length > 0 ? (
        <table className="vendor-table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Category</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, index) => (
              <tr key={index}>
                <td>{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>{vendor.phone}</td>
                <td>{vendor.category}</td>
                <td>
                  <button onClick={() => navigate(`/edit-vendor/${index}`)}>✏️ Edit</button>
                  <button onClick={() => handleDelete(index)}>🗑️ Delete</button>

                </td>
                <td>
                <img
                  src={categoryImages[vendor.category.toLowerCase()]}
                  alt={vendor.category}
                  style={{ width: "40px", height: "40px" }}
                   />
  <div>{vendor.category}</div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No vendors found.</p>
      )}
    </div>
  );
}

export default VendorList;
