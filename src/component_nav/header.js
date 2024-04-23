import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContentChange } from "../navigations/pages/home-screen";





const Header=()=>{
 const {color}=useContext(ContentChange)

    return(
     
          
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{margin:"20px"}}>
        <Link to={"/"} style={{backgroundColor:color.color ,border:" 2px solid black" ,color:"white"}}>Home </Link>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      </li>
      <li className="nav-item" style={{margin:"20px",}}>
        {/* <a className="nav-link" href="#">
          Link
        </a> */}
        <Link to={"/contact"} style={{backgroundColor:color.color ,border:" 2px solid black" ,color:"white"}}>Contact</Link>
      </li>
      <li className="nav-item" style={{margin:"20px",}}>
        {/* <a className="nav-link" href="#">
          Link
        </a> */}
        <Link to={"/setting"} style={{backgroundColor:color.color ,border:" 2px solid black" ,color:"white"}}>Settings</Link>
      </li>
   
    </ul>
  </div>
</nav>


   
      
    )
}

export default Header;
