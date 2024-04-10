import { useState } from "react";



const UseState2 =()=>{

const [fruits,updatefruit]=useState(["Mango","apple"]);


const Add=()=>{
    // const setfruit=[...fruits,"new fruit"]
    updatefruit([...fruits,"new fruit"])
}

const updateFruitAtIndex = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index] = "Updated Fruit";
    updatefruit(updatedFruits);
};


const deleteFruitAtIndex = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits.splice(index, 1);
    updatefruit(updatedFruits);
};




    return(
        <>
        <h2>UseStateExample2</h2>
{
    fruits.map((val,index)=>{
        return(
            <>
            <h2 key={index}>{val}</h2>
            <button onClick={()=>updateFruitAtIndex(index)}>Update</button> 
            <button onClick={()=>deleteFruitAtIndex(index)}>delete</button>
            </>
        )
    })
}
<button onClick={Add}> Add fruit</button>

        </>
    )
}

export default UseState2;