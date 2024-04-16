import { useEffect, useState } from "react";



const UseEffectExample=()=>{

    const[count,setcount]=useState(1);

    useEffect(()=>{
        document.title=`count${count}`
    },[count])

    const Incre=()=>{
        setcount(count+1)
    }
    return(
        <>
        <h2>THis UseEffect example 2</h2>
        <h2>count {count}</h2>
        <button onClick={Incre}>increment by 1</button>
        </>
    )
}

export default UseEffectExample;