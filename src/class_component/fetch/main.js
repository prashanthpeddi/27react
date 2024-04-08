import { Component } from "react";
import axios from 'axios';
import "./main.css"
import CouComponet from "./cou";


class FecthData extends Component{

    state={
        products:[],
        color:"green"  
    }
    static getDerivedStateFromProps(props, state) {
        return {color: props.favcol};
      }


    componentDidMount(){
        this.Data()
    }

    increment=()=>{
        this.setState({
        
        })
    }

    // Data=async()=>{
 
    //     let result=await fetch("https://fakestoreapi.com/products")
    //     let result1=await result.json()
    //     console.log(result1)
    // }


    Data=async()=>{
        const result =await axios.get("https://fakestoreapi.com/products")
        console.log(result)
        // this.setState({ 

        //     products:result.data
        // })
    }

    render(){ 
        console.log(this.state.products);
        return(
            <div className="product">
                {
                    this.state.products.map(eachobj=>{
                        const {id,title,image,description,category,price}=eachobj
                        return(
                            <div className="card" key={id} >
                            <h2 style={{color:this.state.color}}>{title}</h2>
                            <img className="imee" src={image} alt="image" width={100}></img>
                            <h3  style={{color:"red"}}  className="imee">{category}</h3>
                            <h4>{description}</h4>
                            <h4>{price}</h4>
                            <CouComponet></CouComponet>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
export default FecthData;