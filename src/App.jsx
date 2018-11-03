import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Home from './views/Home';
import Auth from './views/Auth';
import Customers from './views/Customers';
import Header from './components/Header';
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

      setToken(data.login.token);
      return (
        <React.Fragment>
          <Header />
          <div className="container main-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/customers" component={Customers} />
            </Switch>
          </div>
        </React.Fragment>
      );
    }}
  </Query>
)

export default App;
