import React ,{useEffect} from 'react'

import classes from  './Cockpit.module.css'

const Cockpit =(props) =>{

    useEffect(()=>{
      console.log("hi");

      setTimeout(()=>{
        alert("Saved data into cloud");
      },1000);

    },[props.persons]);

    const assigned_classes= [];
    let btnclass= '';
    if (props.showPersons){
    btnclass=classes.Red;
    }

    if( props.persons.length<=2){
      assigned_classes.push(classes.red);
    }
    if(props.persons.length<=1){
      assigned_classes.push(classes.bold);
    }


    return(
        <div className={classes.Cockpit}>
      <p className={assigned_classes.join(' ')}>Hola pepsi cola</p>
      <button  
      className={btnclass}
      onClick={props.clicked}>Toggle names</button> 
      </div>
    );

};


export default Cockpit;