
import React,{useState} from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import { scroller } from "react-scroll";
import './Navbar.css';

const Navbare =() =>{

    const [expanded, setExpanded] = useState(false);



    return(
        <>
        <div className="container" style={{fontFamily: 'Open Sans'}}>
       
<div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
    
    <Navbar bg="dark" expand="lg"  fixed="top" className="Nave" expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" onClick={() => setExpanded(expanded ? false : "expanded")} />
        
  <Navbar.Brand href="#" className="text-white h4 pl-5">Platoearn</Navbar.Brand>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    <Nav.Link  className="text-white h6 pl-4" 
    onClick={() => {scroller.scrollTo('Home', {
    smooth: true,
    offset: -70,
    duration: 1000,
}); 
setExpanded(false)}}


    >Home</Nav.Link>
   

     <Nav.Link  className="text-white h6 pl-4"
     onClick={() => {scroller.scrollTo('Services', {
    smooth: true,
    offset: -70,
    duration: 1000,
    
});
 setExpanded(false)}}



     >Services</Nav.Link>
    
    
      
     
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => {scroller.scrollTo('Val', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Values</Nav.Link>
      
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => {scroller.scrollTo('Tech', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Technologies</Nav.Link>


      <Nav.Link  className="text-white h6 pl-4"
      onClick={() => {scroller.scrollTo('Team', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}>Team</Nav.Link>
    
      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => {scroller.scrollTo('Contact', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Contact us</Nav.Link>

      <Nav.Link  className="text-white h6 pl-4"
       onClick={() => {scroller.scrollTo('Footer', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >About us</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
 
</Navbar>


    </div>
</div>

        




     </div>   

        </>
    )
}



export default Navbare;