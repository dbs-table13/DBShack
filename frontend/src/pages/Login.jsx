import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../Login.css'; // Import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.access_token);
      alert("Login successful");
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text" // Change type to text
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit">Login</button>
		{/* <Link to='/dashboard'><button className='btn btn-success w-100 rounded-0'>Login</button></Link> */}
      </form>
    </div>
  );
};

export default Login;