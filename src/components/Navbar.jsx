import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="top-row ps-3 navbar">
        <div className="container-fluid">
          <a className='nav-header' href="/"><h2>Travis Wylie</h2></a>
        </div>
      </div>
      <input type="checkbox" title="Navigation menu" className="navbar-toggler" checked={menuOpen} onChange={(e) => setMenuOpen(e.target.checked)} />

      <div className="nav-scrollable">
        <hr className="d-none d-md-block" />
        <nav className="flex-column">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" className="nav-link" onClick={closeMenu}>Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
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