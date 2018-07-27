import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';
    if (this.state.showPersons) {
    	persons = (
    		<div>
      		{this.state.persons.map((person, index) => {
      			return <Person 
      				click={() => this.deletePersonHandler(index)}
      				name={person.name}
      				age={person.age}
      				key={person.id}
      				changed={(event) => this.nameChangeHandler(event, person.id)}/>
      		})}
      	</div>
    	);
    	btnClass = classes.Red
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
    	assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
    	assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
      	<h1>That's a React App</h1>
      	<p className={assignedClasses.join(' ')}>Take those people</p>
      	<button className={btnClass} onClick={this.togglePersonsHandler}>View Persons</button>
      	{persons}
      </div>
    );
  }
}

export default App;
