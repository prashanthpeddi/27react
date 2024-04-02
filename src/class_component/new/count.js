import { Component } from "react";


class CountComponet extends Component{

    state={
        count:0
    }
    incrementState=(event)=>{
        this.setState(
            {
                count:this.state.count+event
            }
        )
    }
    decrementState=()=>{
        
        if(this.state.count>0){
            this.setState(
                {
                    count:this.state.count-1
                }
            )
        }
       
    }
    resetState=()=>{
        this.setState(
            {
                count:0
            }
        )
    }

    directlyAddten=(event)=>{
        this.setState(
            {
                count:this.state.count+event
            }
        )
    }
    render(){
        return(
            <>  
            <h3>counter example</h3>
            <h3>count :{this.state.count}</h3>
            <button onClick={()=>this.incrementState(1)}>incrementState</button>
            <button onClick={this.decrementState}>decrementState</button>
            <button onClick={this.resetState}>resetState</button>
            <button onClick={()=>this.directlyAddten(10)}>add10</button>
            </>
        )
    }
}

export default CountComponet;