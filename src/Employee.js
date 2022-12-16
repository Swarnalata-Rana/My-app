import React,{ Component } from "react";

class Employee  extends Component{
    render(){
        return(
            <div>
                <h1>Hello Employee Component</h1>
                <h3 >Empid:{this.props.empid}</h3>
                <h3 >name:{this.props.name}</h3>
                <h3 >age:{this.props.age}</h3>
            </div>
        )
    }
}
// in ur jd u hv 2 type module one is defult and another in name
export default Employee;