import React, { Component } from "react";
 class Rendering extends Component{
    render(){
        let layout=null;
        let flag=true;
        if(flag){
            // success condithion
            layout=<div style={{border:"dashed",borderColor:"green"}}>
                <h1 style={{color:"blue",backgroundColor:"lightcoral"}}>success condition</h1>
            </div>
        }
        else{
            // false condition
            layout=<div>
                <h1 style={{color:"green"}}>false condition</h1>
            </div>
        }
        return(
            <div>
                <h1 >condition Render in the Compopnent</h1>
                {layout}
            </div>
        )
    }
}
export default Rendering;
