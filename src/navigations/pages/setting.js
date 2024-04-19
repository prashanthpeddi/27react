import { useContext } from "react";
import Header from "../../component_nav/header";
import FruitForm from "../../function_component/forms/fruitform";
import { DataShare } from "../navigation-stack";


const SettingScreen=()=>{
const {data, ChangeData}=useContext(DataShare)
    return(
        <>
        <Header></Header>
        <h3>welcome to SettingScreen</h3>
        <FruitForm></FruitForm>
        <h1>{data.name}</h1>
        <button onClick={ChangeData}>click to change</button>
        </>
    )
}
export default SettingScreen;