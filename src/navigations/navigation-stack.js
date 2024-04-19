import { createContext, useState } from "react"
import InvalidScreen from "./pages/invalid"
import ProductDetails from "./pages/product-list"
import LoginScreen from "./pages/login-screen"

const { BrowserRouter, RouterProvider, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("./pages/home-screen")
const { default: ContactScreen } = require("./pages/contact-screen")
const { default: SettingScreen } = require("./pages/setting")


 export const DataShare=createContext();



const NavigationStack=()=>{
const [login,setlogin]=useState(false) 
const [data,setdata]=useState(
    {
name:"peddi"
    }
)

const ChangeData=()=>{
    setdata({...data,name:"ram"})
}
const ChangeLogin=()=>{
    setlogin(true)
}

    return(
     <DataShare.Provider value={{data,ChangeData,ChangeLogin}}>
         <BrowserRouter>
         {
            login
            ?
        <Routes>
            <Route path="/" Component={HomeScreen}></Route>
            <Route path="/contact" Component={ContactScreen}></Route>
            <Route path="/setting" Component={SettingScreen}></Route>
            <Route path="*" Component={InvalidScreen}></Route>
            <Route path=":brand/:productId" Component={ProductDetails}></Route>
        </Routes>
        :
        <Routes>
            <Route path="/" Component={LoginScreen}></Route>
        </Routes>

         }
        </BrowserRouter>
     </DataShare.Provider>
       
    )
}

export default NavigationStack;