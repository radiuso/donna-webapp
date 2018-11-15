import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Home from './views/Home';
import Auth from './views/Auth';
import Customers from './views/Customers';
import Orders from './views/Orders';
import Nav from './components/Nav';
import Error from './components/Error';
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
      if (error) return <Error error={error} />;

      setToken(data.login.token);
      return (
        <React.Fragment>
          <Nav />
          <div className="container main-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/customers" component={Customers} />
              <Route path="/orders" component={Orders} />
            </Switch>
          </div>
        </React.Fragment>
      );
    }}
  </Query>
)

export default App;
