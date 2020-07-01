import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons:[
        {id:"1", name:"well",age:"11" },
        {id: "2", name: "back", age: 12 },
        {id: "3", name: "asdasd", age: 12 },  
        {id: "5", name: "baasdck", age: 12 }
      ],
      otherState: 'no',
      showpersons: false,
      changecounter: 0
    
  }
  detelepersonHandler = (personIndex) => {
    const persons1 =[...this.state.persons];
    persons1.splice(personIndex,1);
    this.setState({persons:persons1});
  }
  changeNameHandeler =(event,id) =>{
    const personIndex=this.state.persons.findIndex(p =>{
      return p.id=== id;
    });
    const person= {...this.state.persons[personIndex]};
    
    person.name =event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState((prevState, props)=>{
      return {
        persons: persons,
        changecounter:prevState.changecounter +1
      };
    });
  }
  togglepersonsHandler =() =>{
    const doesshow= this.state.showpersons;
    this.setState({showpersons: !doesshow});

  }


  render() {
    let persons=null
    let btnclass='';



    if (this.state.showpersons){

      persons=<Persons 
          persons={this.state.persons}
          clicked={this.detelepersonHandler}
          changed={this.changeNameHandeler}/>;
      
      
    }

    
    

    return (
    
      <div className={classes.App}>
      <Cockpit showPersons= {this.state.showpersons}
      persons= {this.state.persons}
      clicked={this.togglepersonsHandler}/>
      {persons}
      </div>
 
    );


  }

  
}

export default App;
