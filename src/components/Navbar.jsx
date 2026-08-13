import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sidebar p-3 border-end vh-100" style={{ minWidth: '200px' }}>
      <h2 className='light'>Travis Wylie</h2>
      <hr />
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" className="nav-link">Experience</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;