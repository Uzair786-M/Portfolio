import React from 'react';
import {Carousel} from 'react-bootstrap';

import './Home.css';

const home = () =>{
    
    return(
        <>

        
<div className="container-fluid">
<div className="row">
<div className="col">


            <Carousel fade  style={{overflowX:"hidden"}}>
  <Carousel.Item className="background">
    <img
      className="d-block w-100 img" 
      src="Pic1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="font-italic">
      <h3>Delivering the tools </h3>
      <p>You need to succeed</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src="Home2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="font-italic">
      <h3>Your business is our business</h3>
      <p> Software Engineers are here to fuel up your business.Quality is priority for us because our reputation goes with it</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>


            </div>
          </div>
        </div>



     


 

        </>
    )
}


export default home