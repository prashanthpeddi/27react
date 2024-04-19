import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./cart.css"




const AddCart=()=>{

    const [product,setproduct]=useState([]);
    const [AnProduct,setAnProduct]=useState({});
    const [count,setcount]=useState(1)
useEffect(()=>{
    FetchCart()
},[])

const FetchCart=async()=>{
   try{
    const response= await axios.get('https://dummyjson.com/products')
   console.log(response)
   if(response.status === 200){
    setproduct(response.data.products)
   }else{
    console.log("ERR");
   }
   }catch(err){
    console.log("err");
   }
}
useEffect(()=>{
    FetchingCart()
},[count])

const FetchingCart=async()=>{
    try{
     const responses= await axios.get(`https://dummyjson.com/products/${count}`)
    console.log(responses)
    if(responses.status === 200){
     setAnProduct([...AnProduct,responses.data])
    }else{
     console.log("ERR");
    }
    }catch(err){
     console.log("err");
    }
 }


const Increment=(i)=>{
  setcount(i)
}

    return(
        <div >
        {
            product.map((val,ind)=>{
                return(
                    <div className="card" key={val.id}>
                        <img src={val.thumbnail} width="100px"></img>
                    <h5>Title :{val.title}</h5>
                    <h5>Brand :{val.brand}</h5>
                    <button onClick={()=>Increment(ind+1)}>Add To cart</button>
                    </div>
                )
            })
        } 
       


<div className="main">
   {
   <>
    <h3>{AnProduct.id}</h3>
    <h3>{AnProduct.brand}</h3>
    <h3>{AnProduct.title}</h3>
    <img src={AnProduct.thumbnail} width="100px"></img>
    
   
   </>
}
</div>

        </div>

        
    )
}

export default AddCart;