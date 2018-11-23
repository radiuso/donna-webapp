import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Home from './views/Home';
import Auth from './views/Auth';
import Customers from './views/Customers';
import Orders from './views/Orders';
import Nav from './components/Nav';
import Error from './components/Error';
import Fab from './components/Fab';
import Icon from './components/Icon';
import { setToken } from './services/auth.service';

import './App.css';
import 'react-dates/lib/css/_datepicker.css';


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
          <Fab tag={Link} to="/orders/create"><Icon icon="plus" /></Fab>
          <div className="main-container">
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/customers" component={Customers} />
                <Route path="/orders" component={Orders} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      );
    }}
  </Query>
)

export default App;
