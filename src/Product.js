import React, { Component } from "react";

class Product extends Component{
    // step1- create a constoctor
    constructor(){
        //stpe2-access the base class constroctor
        super();
        this.state={
            name:"Runu143",
            xyz:1000
        }
            // step3- insialisetion the stete value

    }
    //modifiy the state data
    modifyState(){
        this.setState({
            abc:"Swarna",
            prize:2000
        }
    )}
    render(){
        return(
            <div>Product Component State 
            <h3>Product ID is:- {this.state.name} </h3>
            <h3>Product is  prize :-{this.state.xyz} </h3>
            <button onClick={()=>{this.modifyState()}}>ModifyState</button>


            </div>
        )
    }
}
export default Product;