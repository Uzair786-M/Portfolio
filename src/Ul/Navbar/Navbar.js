
import React,{ useState,useEffect } from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import { scroller } from "react-scroll";


const Navbare =() =>{

    let listener = null
    const [scrollState, setScrollState] = useState("top")
  
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 400) {
          if (scrollState !== "amir") {
            setScrollState("amir")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])

    const [expanded, setExpanded] = useState(false);



    return(
        <>
        <div className="container">
       
<div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
    
    <Navbar expand="lg"  fixed="top" expanded={expanded} style={{
        backgroundColor: scrollState === "top" ? "transparent" : "#384c74",
          color: scrollState === "top" ? "white" : "blue",
          padding:"20px",
          boxShadow:scrollState === "top" ? null :"0 5px 15px 0px rgba(0,0,0,0.6)",
          overflowX:"hidden"
    }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" onClick={() => setExpanded(expanded ? false : "expanded")} 
         style={{
          backgroundColor: scrollState === "top" ? "white" : "white",
          color: scrollState === "top" ? "black" : "black",
          padding:"20px",
          boxShadow:scrollState === "top" ? null :"0 5px 15px 0px rgba(0,0,0,0.6)",
          overflowX:"hidden"
  
         }}
        />
        
  <Navbar.Brand href="#" className="text-white h4 pl-5 font-weight-bold">DreamCoders</Navbar.Brand>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    <Nav.Link  className="text-white h6 pl-4 font-weight-bold" 
    onClick={() => {scroller.scrollTo('Home', {
    smooth: true,
    offset: -70,
    duration: 1000,
}); 
setExpanded(false)}}


    >Home</Nav.Link>
   

     <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
     onClick={() => {scroller.scrollTo('Services', {
    smooth: true,
    offset: -70,
    duration: 1000,
    
});
 setExpanded(false)}}



     >Services</Nav.Link>
    
    
      
     
      <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
       onClick={() => {scroller.scrollTo('Val', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Values</Nav.Link>
      
      <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
       onClick={() => {scroller.scrollTo('Tech', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Technologies</Nav.Link>


      <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
      onClick={() => {scroller.scrollTo('Team', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}>Team</Nav.Link>
    
      <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
       onClick={() => {scroller.scrollTo('Contact', {
    smooth: true,
    offset: -70,
    duration: 1000,
});
setExpanded(false)}}
      >Contact us</Nav.Link>

      <Nav.Link  className="text-white h6 pl-4 font-weight-bold"
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