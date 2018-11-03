import React from 'react';
import { Route } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Home from './Home';
import Auth from './Auth';
import Customers from './views/customers/CustomersContainer';
import Header from './layout/Header';
import { setToken } from './services/auth.service';

import './App.css';

const LOGIN_QUERY = gql`{
  login (username: "admin@donna.com", password: "securepwd") {
    token
  }
}`;

const App = _ => (
  <Query query={LOGIN_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :({error})</p>;

      setToken(data.token);
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
            <Route path="/customers" component={Customers} />
          </div>
        </React.Fragment>
      );
    }}
  </Query>
)

export default App;
