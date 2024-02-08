
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };
  const navigate = useNavigate();


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          placeholder='Please Enter Your Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder='Please Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='login' type="submit" onClick={() => {navigate("/dashboard")}}>Login</button>
        
        <button className="btn-signup" type='button'><Link to="/signup" style={{color: "#ccc", textDecoration:'none'}}>Signup</Link></button>
        
      </form>
      
    </div>
  );
};

export default Login;
