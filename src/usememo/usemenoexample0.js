import { useMemo, useState } from "react";


const Usememo=()=>{


const [age,setage]=useState(10);
const [salary,setSalary]=useState(10000);

const EvenAge=useMemo(()=>{
    console.log("render age");
   const even = age%2==0 ? "even" :"odd";
   return even
},[age])



const IncrementAge=()=>{
      setage(age+1);
}

const IncrementSalary=()=>{
    setSalary(salary+100);
}

    return(
        <>
        <h2>Usememo Example</h2>
        <h2>
            {age}
        </h2>
        <h2>{salary}</h2>
        <h2>{EvenAge}</h2>
        <button onClick={IncrementAge}>ADD AGE</button>
        <button onClick={IncrementSalary}>ADD salary</button>
        </>
    )
}

export default Usememo;