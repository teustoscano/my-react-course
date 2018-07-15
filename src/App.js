import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  	persons: [
  		{name: 'Teus', age: 23},
  		{name: 'Ronaldo', age: 33},
  		{name: 'Karine', age: 21}
  	]
  }

  switchNameHandler = () => {
  	//console.log("Clcik");
  	this.setState({
  		persons: [
  			{name: 'Matheus', age: 23},
  			{name: 'Ronaldo', age: 33},
  			{name: 'Karine', age: 21}
  		]
  	})
  }

  render() {
    return (
      <div className="App">
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
