import { useRef, useState } from "react";


const UserComponent =()=>{

    const usernameref=useRef("")
    const passwordref=useRef("")
    const [errorvisible,seterror]=useState(false)
    const [submitted, setSubmitted] = useState(false);
    const[userdetails,setuserdetails]=useState([])
   
    const HandleSubmit=(event)=>{
        event.preventDefault()
   console.log("submitted")
if(usernameref.current.value.length <5){
    seterror(true)
}else{

    console.log(usernameref.current.value);
    console.log(passwordref.current.value);
   
   setuserdetails([
    ...userdetails,
    {
        username:usernameref.current.value,
        password:passwordref.current.value
    }
   ])
   usernameref.current.value = ""; 
   passwordref.current.value = "";

}

   
 
    }

    return(
        <div>
            <h1>forms </h1>
<form onSubmit={HandleSubmit}>
    <input type="text" placeholder="Username"  ref={usernameref}></input>
    <br></br><br></br>
    <input type="password" placeholder="Password" ref={passwordref}></input>
    <br></br>
  { errorvisible && <span style={{color:"red"}}>chusi type chey ra </span>}
    <br></br>
    <input type="submit"></input>
</form>
<br></br>
<br></br>
<br></br>
<table style={{border:"2px solid black",marginLeft:"200px"}}>
<tr style={{border:"2px solid black"}}>
<th style={{border:"2px solid black"}}>S.NO</th>
    <th style={{border:"2px solid black"}}>USERNAME</th>
    <th style={{border:"2px solid black"}}>PASSWORD</th>
</tr>

{

    userdetails.map((val,index)=>{
        return(
<tr key={index} style={{border:"2px solid black"}}>
   <td style={{border:"2px solid black"}}>{index+1}</td>
    <td style={{border:"2px solid black"}}>{val.username}</td>
    <td style={{border:"2px solid black"}}>{val.password}</td>
</tr>
        )
    })
  
}
</table>
        </div>
    )
}
export  default UserComponent;