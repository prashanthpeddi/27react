import { render } from "@testing-library/react"
import { Component } from "react"


class TableComponent extends Component{

    render(){
        return(
            <div>
<table style={{color:"red",border:"2px solid black"}}>
    <tr>
        <td>hello</td>
        <td>hello</td>
        <td>hello</td>
    </tr>
    <tr>
        <td>hello</td>
        <td>hello</td>
        <td>hello</td>
</tr>
    <tr>
        <td>hello</td>
        <td>hello</td>
        <td>hello</td>
    </tr>
</table>
            </div>
        )
    }
}
export default TableComponent;