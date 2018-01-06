import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

const Auth = ({ match }) => (
  <div>
    <Route path={`${match.url}/login`} component={Login} />
  </div>
);

export default Auth;
