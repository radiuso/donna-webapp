import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import logo from '../logo.svg';

class Home extends Component {
  render() {
    const { version } = this.props.data;
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="empty">
          <div className="empty-icon">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <p className="empty-title h5">Welcome to Donna (using api v{version})</p>
          <p className="empty-subtitle">Please login to enjoy</p>
          <Link to="/auth/login" className="btn">Login</Link>
        </div>
      </div>
    );
  }
}

export default graphql(gql`query { version }`)(Home);
