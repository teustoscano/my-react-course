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

  switchNameHandler = (newName) => {
  	//console.log("Clcik");
  	this.setState({
  		persons: [
  			{name: newName, age: 23},
  			{name: 'Ronaldo', age: 33},
  			{name: 'Karine', age: 21}
  		]
  	})
  }

  nameChangeHandler = (event) => {
  	this.setState({
  		persons: [
  			{name: 'Teus', age: 23},
  			{name: event.target.value, age: 33},
  			{name: 'Karine', age: 21}
  		]
  	})
  }

  render() {
    const style = {
    	backgroundColor: 'white',
    	font: 'inherit',
    	border: '1px solid #03a',
    	padding: '8px'
    };

    return (
      <div className="App">
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Toto')}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}/>
      <button style={style} onClick={() => this.switchNameHandler('Matheus')}>Switch Name</button>
      </div>
    );
  }
}

export default App;
