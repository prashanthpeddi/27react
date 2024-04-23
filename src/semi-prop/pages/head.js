import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Head=()=>{
    return(
        <>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Link to={"/"} style={{margin:"40px",color:"white",textDecoration:"none",fontSize:"30px"}}>Home</Link>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Link to={"/about"}  style={{margin:"40px",color:"white",textDecoration:"none",fontSize:"30px"}}>About</Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            <Link to={"/contact"} style={{margin:"40px",color:"white",textDecoration:"none",fontSize:"30px"}}>Contact</Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Link to={"/setting"} style={{margin:"40px",color:"white",textDecoration:"none",fontSize:"30px"}}>Setting</Link>
            <Link to={"/login"} style={{margin:"40px",color:"white",textDecoration:"none",fontSize:"30px"}}>Login</Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Head;