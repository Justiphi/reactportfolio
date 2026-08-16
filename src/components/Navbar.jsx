import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="top-row ps-3 navbar">
        <div className="container-fluid">
          <a className='nav-header' href="/"><h2>Travis Wylie</h2></a>
        </div>
      </div>
      <input type="checkbox" title="Navigation menu" className="navbar-toggler" />

      <div className="nav-scrollable" onclick="document.querySelector('.navbar-toggler').click()">
        <hr className="d-none d-md-block"/>
        <nav className="flex-column">
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

            <hr />
            <br />

            <li className="nav-item">
              <NavLink to="https://www.linkedin.com/in/travis-wylie-9b1129154/" className="nav-link">LinkedIn</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="https://github.com/justiphi" className="nav-link">Github</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;