import { useRef, useState } from "react";





const UseState3 =()=>{

    const [time,settime]=useState(20);
    const intervalRef = useRef(null);

    const TimeChange=()=>{
      intervalRef.current=  setInterval(()=>{
 settime(prevtime=>{
    if(prevtime>0){ 
        return prevtime-1
    }else{
        clearInterval( intervalRef.current);
        return 0;
    }
})
        },1000)
    
    }

    const StopTimer=()=>{
        clearInterval( intervalRef.current);
    }


    return(
        <>
        <h2>UseStateExample 3</h2>
        <h3 style={
            {
              color:time<=10?"red":"green"
            }
        }
        
        
        >{time}</h3>
        <button onClick={TimeChange}>Timer</button>
        <button onClick={StopTimer}>Stop timer</button>

                </>
    )
}
export default UseState3;