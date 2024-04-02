import List2 from "./List2";

function List(){

   const arr = ["mango","melons","apple"]
    return(
        <ol>
            {
                arr.map((val)=>(
                    // <li>{val}</li>
                    <List2  value={val}></List2>
                ))
            }
        </ol>
    )
}

export default List;