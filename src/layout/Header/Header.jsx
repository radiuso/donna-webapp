import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Link to="/" className="navbar-brand mr-2">Donna</Link>
        </section>
      </header>
    );
  }
}

export default Header;
