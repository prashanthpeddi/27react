


const a=["prashanth","teja","puneeth"];

const PeddiPrashanth =()=>{
    return(
        <ol>
             {
                a.map((val)=>{
                    return(
                        
                        <li>{val}</li>
                    )
                })
             }
        </ol>
    )
}

export default PeddiPrashanth;