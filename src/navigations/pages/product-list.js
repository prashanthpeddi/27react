import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails=()=>{
    const {productId}=useParams()
    const [product,setproducts]=useState({})
    // console.log(dynamicContent,"stepone");

useEffect(()=>{
Fetchproducts()
},[productId])

const Fetchproducts=async()=>{
  try{
    const response=await axios.get(`https://dummyjson.com/products/${productId}`)
    console.log(response)
    if(response.status ===200){
        setproducts(response.data)
    }
  }catch(err){
console.log("err");
  }
}

    return(
        <>
        <h2>Product details</h2>
        {
         <>
            <h5>{product.brand}</h5>
            <h5>{product.category}</h5>
            <h5>{product.title}</h5>
            <img src={product.thumbnail} width="200px"></img>
         </>
        }
        </>
    )
}
export default ProductDetails;