import React from "react";

const CustomButtom=({title="hello",Clicked=()=>{}})=>{
    console.log("conditional rendering",title);
    return(
        <button onClick={Clicked}>{title}</button>
    )
}

export default React.memo (CustomButtom)