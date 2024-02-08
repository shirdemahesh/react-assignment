
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup () {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
});

  const handleSignup = () => {
    console.log(values);
  };

//   const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSignup = (e) => {
//       e.preventDefault();
//       console.log('Name:', name ,'Email:', email, 'Password:', password);
//     };

  return (
    <div className="Signup-container">
      <form className="Signup-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <label>Name:</label>
        <input
          type="text"
          placeholder='Enter Your Name'
        //   value={name}
          onChange={(e) => setValues((prev) => ({...prev, name: e.target.value}))}
        //   required
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder='Enter Your Email Address'
        //   value={email}
        onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))}
        //   required
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setValues((prev) => ({...prev, password: e.target.value}))}
        //   value={password}
          placeholder='Enter Your Password'
        //   required
        />
        <button type="submit" className='signup'>Signup</button>
        <p>Already have an Account? <Link to="/" style={{textDecoration:'none'}}>Login</Link></p>
        
        
      </form>
      
    </div>
  );
};

export default Signup;
