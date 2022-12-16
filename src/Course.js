import React,{ Component } from "react";

class Course  extends Component{
    render(){
        return(
            <div>
                <h1>Hello Course Component</h1>
                <h3 >Id:{this.props.id}</h3>
                <h3 >Sub:{this.props.sub}</h3>

                {/* <h3 >age:{this.props.age}</h3> */}

            </div>
        )
    }
}
// in ur jd u hv 2 type module one is defult and another in name
export default Course;