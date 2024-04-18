import InvalidScreen from "./pages/invalid"
import ProductDetails from "./pages/product-list"

const { BrowserRouter, RouterProvider, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("./pages/home-screen")
const { default: ContactScreen } = require("./pages/contact-screen")
const { default: SettingScreen } = require("./pages/setting")






const NavigationStack=()=>{
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}></Route>
            <Route path="/contact" Component={ContactScreen}></Route>
            <Route path="/setting" Component={SettingScreen}></Route>
            <Route path="*" Component={InvalidScreen}></Route>
            <Route path=":brand/:productId" Component={ProductDetails}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack;