import axios from "axios"
import { useEffect, useState } from "react"



const UseEffect=()=>{
    const [productlist,setproductlist]=useState([])
    const [count,setcount]=useState(1);
    const [age,setage]=useState(5);
    const [prod,setprod]=useState({})

    useEffect(()=>{
        FetchUrl()
        console.log("rendering...")
    },[])

    useEffect(()=>{
FectchUrl2();
    },[count])

    const FectchUrl2=async()=>{
        const response2=await axios.get(`https://dummyjson.com/products/${count}`)
        console.log(response2.data)
        setprod(response2.data)

    }
    

    const FetchUrl=async()=>{
      const  response= await axios.get('https://dummyjson.com/products')
      setproductlist(response.data.products)
        console.log(response)
        console.log(response.data.products);
    }
const IncrementCount=()=>{
    setcount(count+1)
}

const IncrementAge=()=>{
    setage(age+1)
}
    return(
        <>
        <h1>UseEffect</h1>
        <h2>Current Count {count}</h2>
        <button onClick={IncrementCount}>Increment by one</button>
        <br>
        </br>
        <h2>current Age {age}</h2>
        <button onClick={IncrementAge}>Increment age{}</button>

        {
            <h3 style={{color:"red"}}>{prod?.title}</h3>
        }
        </>
    )

}

export default UseEffect;