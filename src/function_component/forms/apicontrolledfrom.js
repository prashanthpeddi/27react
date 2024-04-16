import { useState } from "react";


const ApiControlledFrom=()=>{

    const [forms,setForms]=useState(
        {
            username:null,
            password:null
        }
    )

    const onChangeHandlers=(event)=>{

        event.preventDefault()
        const{value,name}=event.target
    
        console.log(value,name)
        
        setForms(prevform=>({
            ...prevform,[name]:value
        }))

       
    }
    const onsub=(event)=>{
        event.preventDefault()
        const{username,password}=forms

        // console.log(username);
        // console.log(password);
        const details={
            username:username,
            password:password,
            expiresInMins: 30
        }
        ApiLink(details)
        console.log(details)
    }

    const ApiLink= async(userInfo)=>{
     const result=await   fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userInfo)
})
const result1=await result.json()
console.log(result1);
if(result1.message){
    alert(result1.message)
}else{
    alert(`wellcome ${result1.username}`)
}
    }

    return(
        <div>
            <h2>HEllo Api</h2>
            <form onSubmit={onsub}>
                <input type="text" placeholder="username" value={forms.username} onChange={onChangeHandlers} name="username"></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="password" value={forms.password} onChange={onChangeHandlers} name="password"></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ApiControlledFrom;