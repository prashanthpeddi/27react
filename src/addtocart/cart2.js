import axios from "axios";
import { useEffect, useState } from "react"

const Car = ()=>{

    const[data,setData] = useState([]);
    const [count,setCount] = useState([])


    useEffect(()=>{
        fetchingData()
    },[])

    const fetchingData = async ()=>{
        const res = await axios.get("https://dummyjson.com/products");
        const result = res.data.products;
        setData(result)
        console.log(result);
    };

    

    const Increment = (i)=>{
        console.log(i);
        const result = data.filter((val)=>{
            return val.id === i
        })
        setCount([...count,result[0]])
        console.log(count);
    }


    return(

        <>


        <div style={{border:"2px solid red",display:"flex",flexWrap:"wrap",gap:50,justifyContent:"space-evenly"}}>
            {
                data.map((val,ind)=>{
                    return(
                        <div key={val.title} style={{border:"2px solid silver",width:300,backgroundColor:"white",height:"fit-content"}}>
                            <h1>Brand:  {val.brand}</h1>
                            <img src={val.thumbnail}  width="200"></img>
                            <h1>category:  {val.category}</h1>
                            <h3>Price:   {val.price}</h3>
                            <h3>Discount:  {val.discountPercentage}</h3>
                            <button  onClick={()=>Increment(val.id)}> Add to Cart </button>
                        </div>
                    )
                })
            }
        </div>
        
           {

            count.length>0
            &&
            count.map((val)=>{
                return(
                    <div>
                        <h1>{val.id}</h1>
                        <h1>{val.brand}</h1>
                        <img src={val.thumbnail}/>
                    </div>
                )
            })
           }
       
        </>
    )
}

export default Car;