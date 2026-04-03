import React from 'react';
import './Header.css';
import { FaDatabase } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <FaDatabase className="logo-icon" />
          <h1>Database Systems Lab</h1>
        </div>
        <nav className="header-nav">
          <a href="#about" className="nav-link">Documentation</a>
          <a href="#github" className="nav-link">GitHub</a>
        </nav>
      </div>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </header>
  );
}

export default Header;
