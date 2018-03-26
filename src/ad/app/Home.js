import React, { Component } from 'react';
import logo from '../../logo.svg';

class Home extends Component {
  render() {
    return ([
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>,
      <p className="app-home">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    ]);
  }
}

export default Home;
