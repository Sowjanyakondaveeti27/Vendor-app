import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Create this CSS file

function Register1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Save to localStorage
    const userData = { name, email, password };
    localStorage.setItem('vendorUser', JSON.stringify(userData));

    alert('Registration successful! You can now login.');
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={`form-input ${errors.name ? 'input-error' : ''}`} 
              required 
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={`form-input ${errors.email ? 'input-error' : ''}`} 
              required 
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={`form-input ${errors.password ? 'input-error' : ''}`} 
              required 
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`} 
              required 
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        
        <p className="login-link">
          Already have an account? <Link to="/" className="link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register1;