import { useContext } from "react";
import { DataShare } from "../navigation-stack";



const LoginScreen=()=>{

    const {data,ChangeLogin}=useContext(DataShare)



    return(
        <>
        
        <h3>Hii user Login to see the data</h3>
        <button onClick={ChangeLogin}>Click to login</button>
  
        </>
    )
}

export default LoginScreen;