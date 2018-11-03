import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Donna</Link>
        </div>
        <Link to="/customers" className="navbar-item">Clients</Link>
      </nav>
    );
  }
}

export default Header;
