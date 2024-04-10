import { useRef, useState } from "react";



const FruitForm =()=>{

    const userInputref=useRef("")
    const [Fruits,SetFruits]=useState(["apple","bananna"])

    const HandleSubmitType=(event)=>{

        event.preventDefault()
        
        console.log("submitted")
        console.log(userInputref.current.value);

        SetFruits([...Fruits,userInputref.current.value])

        userInputref.current.value="";
    }


    return(
        <div>
            <h2> form Example 2</h2>
            <form onSubmit={HandleSubmitType}>
                <input type="text" placeholder="Add Fruit" ref={userInputref}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>


            <div>
                <ol>
                    {
                        Fruits.map((val)=>{
                            return(
                                <li>{val}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
        
    )
}
export default FruitForm;