import axios from 'axios';
import { Component } from "react";
import "./fetchdata.css"



class AddCart extends Component{


    state={
        products:[],

        // count:0
    }
    componentDidMount(){
        this.data()
    }
    // add=(id)=>{

        
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

    // minus=()=>{
    //     if(this.state.count>0){
    //         this.setState({
    //             count:this.state.count-1
    //         })
    //     }
    // }

data=async()=>{
    const result =await axios.get("https://dummyjson.com/products")
    const dd=result.data.products.map((prod)=>{
        return{
            ...prod,
            count:1,
            totalprice:prod.price,

        }
    })
    console.log(result)
    this.setState({
        products:dd
    })
}


add=(id)=>{

   const updateProducts=this.state.products.map((val)=>{
            if(val.id === id){
             return{
                ...val,
                count:val.count+1,
                // price:val.price + price
                totalprice:val.price*(val.count+1)
             }
            }
            return val
        });
    this.setState({products:updateProducts})
   
}

minus=(id)=>{
    const updateProducts=this.state.products.map((val)=>{
        if(val.id === id && val.count>0){
            return{
                ...val,
                count:val.count-1,
                // price:val.price - price
                totalprice:val.price*(val.count-1)
               
            }
        }
        return val
    });
    this.setState({products:updateProducts})
}


    render(){
        console.log(this.state.products)
        return(
<div className='product'>
    {/* <h1>product list</h1> */}

    {
        this.state.products.map((val)=>{
return(
    <div className='cards' >
        <img   className='imee' src={val.images[0]} width="150px"></img>
        <h4  >{val.title}</h4>
        <h2 style={{color:"green"}}> ₹{val.price}</h2>
        <div className='second'>
        <button className='minuss' onClick={()=>this.minus(val.id,val.price)}>-</button>
        <h3 style={{marginTop:"-4px"}}>{val.count}</h3>
        <button className='adds'  onClick={()=>this.add(val.id,val.price)}>+</button>
        <h5 className='total'> TotalPrice :₹{val.totalprice}</h5>
        
        </div>
    </div>
)
        })
    }
</div>
        )
    }
}

export default AddCart;