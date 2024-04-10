import { useState } from "react";



const UseStateExample =()=>{
 
    const [count,updatecount]=useState(10);


    const add=(val)=>{
        updatecount(count+val)
    }
    const minus=()=>{

        if(count>0)
        updatecount(count-1)
        
    }
    const reset=()=>{
        updatecount(10)
    }

    return(
        <>
        <h2>UseStateExample</h2>
        <h4>{count}</h4>
        <button onClick={()=>add(5)}>Increment</button>
        <button onClick={minus}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default UseStateExample;