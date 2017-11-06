import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hangman from './components/Hangman'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;
