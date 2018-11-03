import React from 'react';
import { Link } from 'react-router-dom';

const Header = _ => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">Donna</Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/customers" className="navbar-item">Clients</Link>
      </div>
    </div>
  </nav>
);

export default Header;
