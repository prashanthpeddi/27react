import { useState } from "react";



const Controlledfrom1=()=>{

    const [forms,setForms]=useState(
        {
            username:null,
            password:null
        }
    )

    const [formErrors,setFormErrors]=useState(
        {
            usernameErr:null,
            passwordErr:null
        }
    )
    const onChangeHandlers=(event)=>{

        event.preventDefault()
       const {value,name}=event.target
console.log(value,name)
       setForms(prevform=>({
        ...prevform,[name]:value
       }))
// const details={
//     username:event.target.value,
//     password:event.target.value
// }
// console.log(details)

       switch(name){
        case "username":
            if(value.length>6){
                setFormErrors(
                    {
                        ...formErrors,usernameErr:"enter less then 6"
                    }
                )
            }else{
                setFormErrors(
                    {
                        ...formErrors,usernameErr:null
                    }
                )
            }
            break;
            case "password":
                if(value.length>6){
                    setFormErrors(
                        {
                            ...formErrors,passwordErr:"enter less thn 6"
                        }
                    )
                }else{
                    setFormErrors(
                        {
                            ...formErrors,passwordErr:null
                        }
                    )
                }break;


       }

    }

    return(
        <div>
            <h2>Example2</h2>
            <form>
                <input type="text" placeholder="user name" value={forms.username} onChange={onChangeHandlers} name="username"></input>
               <br>
               </br>
             
               {
                formErrors.usernameErr && <span style={{color:"red"}}>Invalid userName</span>
               }
               <br></br>
                <input type="password" placeholder="password" value={forms.password} onChange={onChangeHandlers} name="password"></input>
            <br></br>
            {
                formErrors.passwordErr && <span style={{color:"red"}}>Invalid password</span>
               }
                <input type="submit" ></input>
            </form>
        </div>
    )
}

export default Controlledfrom1;