import React , {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css'; 

class Person extends Component{
    render()
    {
        console.log('Render inside Person.js');
        return (
            //<div className="Person" style={style}>
             <Auxiliary>
            <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed}/>
            </Auxiliary>   
            
            );
    }

    
}
export default withClass(Person,classes.Person); 