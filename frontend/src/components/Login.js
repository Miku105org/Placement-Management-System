import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="signup-link">
            <a href="#">Signup</a>
          </div>
        </form>
      </div>
      {/* Animated background elements */}
      {[...Array(50)].map((_, i) => (
        <span key={i} style={{ '--i': i }}></span>
      ))}
    </div>
  );
}

export default Login;
