import React from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import { scroller } from "react-scroll";

const navbar =() =>{
    return(
        <>
        <div className="container" style={{fontFamily: 'Open Sans'}}>
       
        <Navbar bg="dark" expand="lg"  fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto"/>
        
  <Navbar.Brand href="#" className="text-white h4 pl-5">Platoearn</Navbar.Brand>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    <Nav.Link  className="text-white h6 pl-4" 
    onClick={() => scroller.scrollTo('Home', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
    >Home</Nav.Link>
   

     <Nav.Link  className="text-white h6 pl-4"
     onClick={() => scroller.scrollTo('Services', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
     >Services</Nav.Link>
    
    
      
     
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => scroller.scrollTo('Val', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
      >Values</Nav.Link>
      
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => scroller.scrollTo('Tech', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
      >Technologies</Nav.Link>
      <Nav.Link  className="text-white h6 pl-4">Team</Nav.Link>
    
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => scroller.scrollTo('Contact', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
      >Contact us</Nav.Link>

      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => scroller.scrollTo('Footer', {
    smooth: true,
    offset: -70,
    duration: 2000,
})}
      >About us</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
 
</Navbar>




     </div>   

        </>
    )
}



export default navbar;