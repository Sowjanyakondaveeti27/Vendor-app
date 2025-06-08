import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login
    localStorage.setItem('isLoggedIn', true);
    navigate('/dashboard');
  };

  const handleRegisterRedirect = () => {
    navigate('/register1');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Wanna Sell your Hardwork!!!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <p style={{ marginTop: '1rem' }}>Don't have an account?</p>
        <button
          type="button"
          onClick={handleRegisterRedirect}
          style={{
            backgroundColor: '#2196F3',
            marginTop: '0.5rem',
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
