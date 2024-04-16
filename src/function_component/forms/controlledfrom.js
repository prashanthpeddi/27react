import { useState } from "react";



const ControlledFrom=()=>{

    const [username,setuserName]=useState("");
    const [password,setPassword]=useState("");
    const [userNameErr,setUserNameErr]=useState(null)


    const userNameHandler=(event)=>{
        const userName=event.target.value
        setuserName(userName)
if(userName.trim().length>6){
setUserNameErr("input must be less than 6")
}else{
    setUserNameErr(null)
}


        console.log(userName);
    }

    const PasswordHandler=(event)=>{
const Passwordhell=event.target.value;
setPassword(Passwordhell);
console.log(Passwordhell)
    }
    
const handelSubmit=(event)=>{
    event.preventDefault()
    const userDetails={
        username:username,
        password:password,
        id:Math.random()
        
    }
    console.log(userDetails)
}


    return(
        <div>
            <h2>hello</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={userNameHandler}></input>
                {
                    userNameErr && <span style={{color:"red"}}>Invalid user name</span>
                }
                <br></br>
                <input type="password" placeholder="Password" value={password} onChange={PasswordHandler}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ControlledFrom;