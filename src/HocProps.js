import React, { Component } from "react";
let HOCChild=(HocBase)=>class extends Component{
    constructor(){
        super();
            this.state={
                counter:10
            }   
    }
    ModifyState(){
        this.setState({
            counter:this.state.counter+5
        })
    }
    render(){
        return(
            <div>
                <h3>HOC Component Props and State</h3>
                <HocBase propscounter={this.state.counter} Propsmethod={()=>this.ModifyState()}/>
            </div>
        )
    }
}
let ButtonComp=(props)=>{
        return(
            <button onClick={props.Propsmethod}>Counter value:{props.propscounter}</button>
        )
    }
let ButtonCopompState=HOCChild(ButtonComp)
class HocPprops extends Component{
     render(){
         return(
            <div>
                <h1>Hello</h1>
                <HOCChild/>
                <ButtonCopompState/>
                {/* <h1 style={{border:"dashed",borderColor:"green"}}>Hoc with Props</h1> */}
            </div>
         )
     }
}
export default HocPprops;



    

