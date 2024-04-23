import { useReducer } from "react"




const reducerFunction=(state,action)=>{
 switch(action.type){
    case "Increment_Age":

    return{ ...state,age:state.age+10}

    case "Decrement_Age":

    return{ ...state,age:state.age-10}
    case "Rest_Age":
        
    return{ ...state,age:10}

    case "Increment_Count":
        
    return{ ...state,count:state.count+1}

    case "Decrement_Count":
        
    return{ ...state,count:state.count-1}

    case "Change_Name":
        
    return{ ...state,name:"xyz"}

    case "Todo_List":
        
    return{ ...state,todos:[...state.todos,",new todo"]}
    
    default :
    return state

 }
}

const intialstate={
    name:"abc",
    count:10,
    age:100,
    salary:1000,
    subject:[1,2,3],
    todos:['Hello']

}

const UsereducerExample=()=>{

    const [currentValues,dispatchFunction]=useReducer(reducerFunction,intialstate)
    
  const Increment=()=>{

    const action={
        type :"Increment_Age"
    }

    dispatchFunction(action)
  }  

  const Decrement=()=>{

    const action={
        type :"Decrement_Age"
    }

    dispatchFunction(action)
  } 

  const Increment_Count=()=>{

    const action={
        type :"Increment_Count"
    }

    dispatchFunction(action)
  } 
    
  const Decrement_Count=()=>{

    const action={
        type :"Decrement_Count"
    }

    dispatchFunction(action)
  } 

  const Change_Name=()=>{
    const action={
        type :"Change_Name"
    }
    dispatchFunction(action)
  }

  const Change_todo=()=>{
    const action={
        type :"Todo_List"
    }
    dispatchFunction(action)
  }
    
    
    return(
        <>
        <h2>UseEffectExample</h2>
        <h3>Age :{currentValues.age}</h3>
        <button onClick={Increment}>Increment Age</button>
        <button onClick={Decrement}>Decrement Age</button>
        <h3>Current Count :{currentValues.count}</h3>
        <button onClick={Increment_Count}>Increment Count</button>
        <button onClick={Decrement_Count}>decrement count</button>
        <h3>Name :{currentValues.name}</h3>
        <button onClick={Change_Name}>Change name</button>
        <h4>{currentValues.todos}</h4>
        <button onClick={Change_todo}> ADD TODO</button>
        </>
    )
}

export default UsereducerExample;