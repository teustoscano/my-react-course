import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Person name="Teus" age="23"/>
      </div>
    );
  }
}

export default App;
