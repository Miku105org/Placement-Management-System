import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Placement Management System</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
