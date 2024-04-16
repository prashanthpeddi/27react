import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{margin:"20px"}}>
        <Link to={"/"}>Home</Link>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      </li>
      <li className="nav-item" style={{margin:"20px",}}>
        {/* <a className="nav-link" href="#">
          Link
        </a> */}
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li className="nav-item" style={{margin:"20px",}}>
        {/* <a className="nav-link" href="#">
          Link
        </a> */}
        <Link to={"/setting"}>Settings</Link>
      </li>
   
    </ul>
  </div>
</nav>

</>
    )
}

export default Header;
