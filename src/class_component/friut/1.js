import { Component } from "react";



class FriutOne extends Component{

  state={
    fruits:["mango" ,"apple" ,"pineapple"]
  }



  addApple=()=>{
    this.setState({
        color:true,
      fruits:[...this.state.fruits,"apple"]
    })
  }
  addBannana=()=>{
    this.setState({
        fruits:[...this.state.fruits,"bananna"]
    })
  }
  addMango=()=>{
    this.setState({
        fruits:[...this.state.fruits,"Mango"]
    })
  }

  delete=()=>{
    this.setState({
        fruits:this.state.fruits.slice(0, -1)
    })
  }

  reset=()=>{
    this.setState(
        {
            fruits:[]
        }
    )
  }

    render(){
        return(
            <>
            <h1>Friut:{this.state.fruits.join(", ")}</h1>
            <button style={{color:this.state.color?"red":"green"}} onClick={this.addApple}> Add An Apple</button>
            <button onClick={this.addBannana}> Add a Bannana</button>
            <button onClick={this.addMango}>Add a mango</button>
            <button onClick={this.delete}>delete friut</button>
            <button onClick={this.reset}>Reset </button>
            </>
        )
    }
}

export default FriutOne;