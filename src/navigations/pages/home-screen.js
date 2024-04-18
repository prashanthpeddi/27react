import axios from "axios";
import Header from "../../component_nav/header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const HomeScreen=()=>{
const [products,setproducts]=useState([])
    useEffect(()=>{
FetchApiData()
    },[])

const FetchApiData=async()=>{
    try{
        const response=await axios.get('https://dummyjson.com/products')
        console.log(response)
        if(response.status === 200){
            setproducts(response.data.products)
        }else{
            console.log("unexpected err");
        }
    }catch(err){
        console.log(err);
    }
    
}

    return(
        < >
                <Header></Header>
        <h3>Welcome to HomeScreen</h3>

        {
            products.map((val,index)=>{
                return(
                    <>
                    <img  src={val.thumbnail} width="150px"></img>
                    <button><Link to={`${val.brand}/${val.id}`}>click to see more</Link></button>
                    </>
                )
            })

        }

        
        </>
    )
}

export default HomeScreen;