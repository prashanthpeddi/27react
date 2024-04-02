import { Component } from "react";
import CountComponet from "./count";





class ButtonComponent extends Component {
    state = {
        issubscibe: false,
        text1: "subscibe",
        text2: "subscibed"
    }
    changeSubscribe = () => {
        console.log("clicked")

        this.setState(
            {
                issubscibe: !this.state.issubscibe
                


            }
        )
    }
    render() {
        return (
            <div>

                <button style={{color:this.state.issubscibe ?"red":"green"}}     onClick={this.changeSubscribe}>{this.state.issubscibe ?  this.state.text2: this.state.text1}</button>

                {
                    this.state.issubscibe ?
                    <div>
                    <h2>Welcome buddy</h2>
                    <CountComponet></CountComponet>
                    </div>
                    
                    :
                    <h2>Please do subscribe</h2>
                }

               
            </div>
        )
    }
}
export default ButtonComponent;