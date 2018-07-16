import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  	persons: [
  		{name: 'Teus', age: 23},
  		{name: 'Ronaldo', age: 33},
  		{name: 'Karine', age: 21}
  	],
  	showPersons: false
  }

  deletePersonHandler = (personIndex) => {
  	// New array with old array values but not the real old array
  	const persons = [...this.state.persons];
  	persons.splice(personIndex, 1);
  	this.setState({persons: persons});
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

  togglePersonsHandler = () => {
  	const doesShow = this.state.showPersons;
  	this.setState({
  		showPersons: !doesShow
  	});
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
      	<button style={style} onClick={this.togglePersonsHandler}>View Persons</button>
      	{this.state.showPersons ? 
      	<div>
      		{this.state.persons.map((person, index) => {
      			return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}/>
      		})}
      	</div>
      	: null}
      </div>
    );
  }
}

export default App;
