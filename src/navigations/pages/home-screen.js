import axios from "axios";
import Header, { ContentChange } from "../../component_nav/header";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../navigation-stack";




const HomeScreen=()=>{
const [products,setproducts]=useState([])
 const {data, ChangeData}= useContext(DataShare)
 const res=useContext(ContentChange)
//  console.log(res);


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
        <h3>Welcome to HomeScreen {data.name}</h3>
        <button onClick={ChangeData}>click to change data</button>
        <button onClick={res.ColorChange}>Click to change the color</button>

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