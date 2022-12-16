import React, {Component}from "react";

class Emp  extends Component{
    list=[{id:101,name:"Runu",skills:["Abhi","pinky"]},
    {id:102,name:"Chinu",skills:["Abhi","pinky"]},
    {id:103,name:"Subha",skills:["Abhi","pinky"]}]

    list1=this.list.map((value,name)=><li>{value}</li>)


    render(){
        return(
            <div>
                
               <h1>Hello</h1>
            </div>
        )
    }
}
// in ur jd u hv 2 type module one is defult and another in name
export default Emp;