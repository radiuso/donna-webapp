import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="empty">
        <div className="empty-icon">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="empty-title h5">Welcome to Donna</p>
      </div>
    );
  }
}

export default App;
