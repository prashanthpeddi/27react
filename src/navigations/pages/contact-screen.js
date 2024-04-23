import Header from "../../component_nav/header";
import ControlledFrom from "../../function_component/forms/controlledfrom";
import ParentComponet from "../../usecallback/parent";
import Usememo from "../../usememo/usemenoexample0";


const ContactScreen=()=>{
    return(
        <>
        <Header></Header>
        <h3>wellcome to contact screen</h3>
        <ControlledFrom></ControlledFrom>
        <Usememo></Usememo>
        <ParentComponet></ParentComponet>
        </>
    )
} 

export default ContactScreen;