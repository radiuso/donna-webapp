import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import logo from '../logo.svg';

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="empty">
      <div className="empty-icon">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <p className="empty-title h5">Welcome to Donna</p>
      <p className="empty-subtitle">Please login to enjoy</p>
      <Link to="/auth/login" className="btn">Login</Link>
    </div>
  </div>
);

export default Home;
