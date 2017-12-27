import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to TP-Link Hub</h1>
    </header>
    <p className="App-intro"> <code>src/App.js</code> and save to reload.</p>
  </div>
);

export default Header;
