import React, { Component } from "react";
// high order componet 
// 1-creact a function
// 2-input componet
// output componet(with exisiting logic +new logic)
let Hocchild=(HocBese)=>class extends Component{
    render(){
        return(
            <div>
                <h1>New Component</h1>
                <HocBese/>
            </div>
        )
    } 
}
// Hocchild()
// class Hoc extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>High Oder Component</h1>
//             </div>
//         )
//     }
// }
export default Hoc;