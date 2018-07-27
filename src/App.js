import React, { Component } from 'react';
import './App.css';
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
    const style = {
    	backgroundColor: 'green',
    	color: 'white',
    	font: 'inherit',
    	border: '1px solid #000',
    	padding: '8px'
    };

    let persons = null;

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

    	style.backgroundColor = 'red';
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
    	classes.push('red');
    }
    if (this.state.persons.length <= 1) {
    	classes.push('bold');
    }

    return (
      <div className="App">
      	<h1>That's a React App</h1>
      	<p className={classes.join(' ')}>Take those people</p>
      	<button style={style} onClick={this.togglePersonsHandler}>View Persons</button>
      	{persons}
      </div>
    );
  }
}

export default App;
