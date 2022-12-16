import React, { Component } from "react";
class List extends Component{
    rainbow=["red","green","orange","pink","yellow",]

    rainbowlist=this.rainbow.map((value,index)=><li>{value}</li>)
    rainbowKeys=this.rainbow.map((value,index)=><li key={value}>{index}=={value}</li>)

    render(){
        return(
            <div>
                <h1>hello</h1>
                <h2>rainbow list come</h2>
                <ul>{this.rainbow}</ul>
                <ul>{this.rainbowlist}</ul>
                <ul>{this.rainbowKeys}</ul>

            </div>
        )
    }
}
export default List;