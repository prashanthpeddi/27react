import axios from "axios";
import { useEffect, useState } from "react";


const UseCards=()=>{

    const[cards,setcards]=useState([]);
    const [count,setCount]=useState(1);
    const[products,setproducts]=useState({});


useEffect(()=>{
FetchApiCard()
},[])


const FetchApiCard=async()=>{
    const response=await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);
    const ppp=response.data.products;
    setcards(ppp)

 
   
}
const Increment=(i)=>{
    setCount(i)
}

const InduFetch=async()=>{
    const response1=await axios.get(`https://dummyjson.com/products/${count}`);
    console.log(response1.data);
    setproducts(response1.data)
}
useEffect(()=>{
    InduFetch();
},[count])

    return(
        <>
        <h1>Hello</h1>
      
        {
            cards.map((val,ind)=>{
return(
    <button onClick={()=>Increment(ind+1)}>{ind+1}</button>

)
            })
        }
        <br></br>
        <img src={products.thumbnail} width="600"px></img>
        </>
    )
}

export default UseCards;