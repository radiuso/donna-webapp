import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';
import Header from './layout/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </div>
    );
  }
}

export default App;
