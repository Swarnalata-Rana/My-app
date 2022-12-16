import React, { Component } from "react";

class Student extends Component{
    // step1- create a constoctor
    constructor(){
        //stpe2-access the base class constroctor
        super();
        this.state={
            firstName:"Runu143",
            rollNo:1000
        }
            // step3- insialisetion the stete value

    }
    //modifiy the state data
    modifyState(){
        this.setState({
            firstName:"Swarna",
            rollNo:1000+100
        }
    )}
    render(){
        return(
            <div><h1>Student Component</h1>
            <h3>Sudent name:-{this.state.firstName} </h3>
            <h3> Sudent Roll No:- {this.state.rollNo} </h3>
            <button onClick={()=>{this.modifyState()}}>ModifyState</button>
            </div>
        )
    }
}
export default Student;