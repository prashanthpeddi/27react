import { useEffect, useState } from "react";


const UseEffectExample=()=>{

    const[x,setx]=useState(0)
    const[y,sety]=useState(0)


const Mouse=(event)=>{

    setx(event.clientX);
    sety(event.clientY)
   console.log(event.clientX,"event by x-axis");
   console.log(event.clientY,"event by y-axis");
  }

useEffect((event)=>{

   
  window.addEventListener("mousemove",Mouse)

  return ()=>{
    window.removeEventListener("mousemove",Mouse)
  }

},[])

    return(
        <>
        <h2>useEffectExample</h2>
        <h2>X-axis : {x}</h2>
        <h2>y-axis : {y}</h2>
        <h2></h2>
        </>
    )
}

export default UseEffectExample;