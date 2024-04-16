import axios from "axios";
import { useEffect, useState } from "react";



const FectchWether=()=>{

    const [username,setuserName]=useState("");
    const [temp,settemp]=useState(null)



    const userNameHandler=(event)=>{
        const userName=event.target.value
        setuserName(userName);
    console.log(userName);
    }

    
const handelSubmit=(event)=>{
    event.preventDefault()
 
    FetchApiWether()
    setuserName("");
    // console.log(userDetails)
}


const FetchApiWether=async()=>{
    const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${username}&appid=2be7c4d8db52c17aa996fd8d5b5122c3`)
   const temp=response.data.main.temp
    console.log(temp)
    settemp(temp)

}


    return(
        <div>
            <h2>hello</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Enter city" value={username} onChange={userNameHandler}></input>
              
                <br></br>
               <br></br>
                <input type="submit"></input>
            </form>
            <br></br>
            <h1> Temperature :{temp}</h1>
          
        </div>
    )
}

export default FectchWether;