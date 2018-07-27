import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
  	persons: [
  		{name: 'Teus', age: 23, id: 0},
  		{name: 'Ronaldo', age: 33, id: 1},
  		{name: 'Karine', age: 21, id: 2}
  	],
  	showPersons: false
  }

  deletePersonHandler = (personIndex) => {
  	// New array with old array values but not the real old array
  	const persons = [...this.state.persons];
  	persons.splice(personIndex, 1);
  	this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
  	const personIndex = this.state.persons.findIndex(p => {
  		return p.id === id;
  	});

  	const person = {...this.state.persons[personIndex]};

  	person.name = event.target.value;

  	const persons = [...this.state.persons];
  	persons[personIndex] = person;

  	this.setState({
  		persons: persons
  	})
  }

  togglePersonsHandler = () => {
  	const doesShow = this.state.showPersons;
  	this.setState({
  		showPersons: !doesShow
  	});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
    	persons =
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>;
    }

    

    return (
      <div className={classes.App}>
      	<Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
      	{persons}
      </div>
    );
  }
}

export default App;
