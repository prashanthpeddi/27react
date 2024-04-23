import axios from "axios";
import Header from "../../component_nav/header";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataShare} from "../navigation-stack";
import { createContext } from "react"


export const ContentChange=createContext()

const HomeScreen=()=>{
const [products,setproducts]=useState([])
 const {data, ChangeData}= useContext(DataShare)
//   const {Color,ColorChange}=useContext(ContentChange)
//  console.log(res);

const [color,setcolor]=useState(
    {
      color:"red"
    }
  )




    useEffect(()=>{
FetchApiData()
    },[])

    const ColorChange=()=>{
        setcolor({color:"green"})
      }


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
         <ContentChange.Provider value={{color,ColorChange}}>
                <Header></Header>
        <h3>Welcome to HomeScreen {data.name}</h3>
        <button onClick={ColorChange}>cLIck to change color</button>
        <button onClick={ChangeData}>click to change data</button>
        {/* <button onClick={ColorChange}>Click to change the color</button> */}

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

</ContentChange.Provider>
        </>
    )
}

export default HomeScreen;