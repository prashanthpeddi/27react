import Table2 from "./table2"

export default function Table(){
    const arr = [{id:1,name:"prashanth"},{id:2,name:"ravi"}]
    return(

        <table>
        {
            arr.map((val)=>(

                <Table2 value={val}></Table2>
            )
        )
        }
        </table>
    
    )
}