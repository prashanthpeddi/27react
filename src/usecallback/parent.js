import { useCallback, useState } from "react";
import CustomButtom from "./custombutton";



const ParentComponet=()=>{

    const [age,setage]=useState(10);
    const [salary,setSalary]=useState(1000);

    const IncrementAge=useCallback(()=>{
    setage(age+1)
},[age])

const IncrementSalary=useCallback(()=>{
    setSalary(salary+1)
},[salary])



    return(
        <>
        <h2>HEllo moto</h2>
        <h2>{age}</h2>
        <h3>{salary}</h3>
        <CustomButtom title="age check" Clicked={IncrementAge}></CustomButtom>
        <CustomButtom title="salary check" Clicked={IncrementSalary}></CustomButtom>
        </>
    )
}

export default ParentComponet;