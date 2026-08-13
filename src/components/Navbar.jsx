import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sidebar p-3 border-end vh-100" style={{ minWidth: '200px' }}>
      <ul className="nav flex-column">
        <li className="nav-item"><Link to="/" className="nav-link text-dark">Home</Link></li>
        <li className="nav-item"><Link to="/experience" className="nav-link text-dark">Experience</Link></li>
        <li className="nav-item"><Link to="/projects" className="nav-link text-dark">Projects</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link text-dark">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
