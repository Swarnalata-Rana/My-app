import React,{ useState }  from "react"
const Count=()=>{
    const state=useState();
    const [countNum,setCount]=useState(0);
    const IncNum=()=>{
        setCount(countNum+1);
    };
    return(
        <>
        <h1 style={{fontSize:"35px",marginTop:"11rem"}}>{countNum}</h1>
        <button style={{backgroundColor:"blue",fontSize:"35px",marginTop:"17rem",border:"2px solid #ecf0f1"}} 
         onClick={IncNum}>Click Me</button>
        </>
    );
};
export default Count;