import axios from "axios"
import { Component } from "react";
import './filter.css'
import Example from "./boot";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



class SortComponent extends Component{

    componentDidMount(){
       this.fetch()
    }
    state={
        product:[],
        filteredProducts:[]
    }

fetch=async()=>{
    const result = await axios.get('https://dummyjson.com/products')
    console.log(result)
    this.setState({
product:result.data.products,
filteredProducts:result.data.products

    })
}


 filter100=()=>{
     const result=this.state.product.filter((eachobj)=>eachobj.price<=100)
    // console.log(result)
    this.setState(
        {
            filteredProducts:result,
            // product:result

           
        }
    )

}
filter200=()=>{
    
    const d=this.state.product.filter((val));
    function val(value,index,array){
        return value.price<=200 && value.price>=100
    }
    this.setState(
        {
            filteredProducts:d
            // product:d
        }
    )
}


filtermore=()=>{
    const hello=this.state.product.filter((val));
    function val(value,index,array){
        return value.price<=1500 && value.price>=200
    }
    this.setState(
        {
            filteredProducts:hello
            // product:hello
        }
    )
}

    render(){
        // console.log(this.state.product)
        console.log(this.state.filteredProducts)
        return(
            <>

                <Button variant="primary" onClick={() => this.setState({ showFilter: true })}><img src="https://cdn-icons-png.flaticon.com/128/9293/9293128.png" width="35px"></img></Button>
                <Offcanvas show={this.state.showFilter} onHide={() => this.setState({ showFilter: false })}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Filter</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Button variant="secondary" onClick={this.filter100}>Range 0-100</Button><br></br><br></br>
                        <Button variant="secondary" onClick={this.filter200}>Range 101-200</Button><br></br><br></br>
                        <Button variant="secondary" onClick={this.filtermore}>Range 200-1500</Button>
                    </Offcanvas.Body>
                </Offcanvas>
             <div className="product">
           

           
               
 
                {
                   this.state.filteredProducts.map((val)=>{
                    return(
                       
                        <div className="cards" key={val.id}>
                           
                            <img  className="imee" src={val.images[0]} width="150" ></img>
                            <h3 className="imee">{val.title}</h3>
                            <h2 style={{color:"red"}}>₹{val.price}</h2>
                           
                        </div>
                    )
                   })
                }
            </div>
            </>
        )
    }
}


export default SortComponent;