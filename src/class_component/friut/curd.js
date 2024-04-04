import { Component } from "react";




class NewFruit extends Component{

 state={
    arr:["apple","mango","banana","kasaFruit"]
 }

 UpdFruit=(index)=>{

  const update=[...this.state.arr];
   console.log(update)
   const newArr=update.map((val,ind)=>{
    if(index === ind){
        return "alpha"
    }else{
        return val
    }
    
   })

console.log(newArr)
    this.setState({
arr:newArr
    })
 }



    render(){
        return(
            <ol>

                {
                 this.state.arr.map((value,index)=>{
                    return(
                       <>
                        <li>{value}</li>
                        <button onClick={()=>this.UpdFruit(index)}>update</button>
                       </>
                    )
                 })
                }
            </ol>
            
          

           
        )
    }
}

export default NewFruit;