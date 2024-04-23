import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Setting from "./pages/setting";
import Invalid from "./pages/invalid";
import Login from "./pages/login";



const MainStack=()=>{
    return(
        <>
    
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/setting" Component={Setting}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="*" Component={Invalid}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default MainStack;