import React from 'react';

import './Home.css';

const home = () =>{
    
    return(
        <>
     

        <div className="fluid-container text-white" style={{fontFamily: 'Open Sans'}} id="Home">

<img src="Image 2.jpg" className="img w-100" style={{position:"absolute"}}/>


 
        <div className="background">

       <div className="row">

       <div className="col m-5 p-5">
       
       <p style={{fontSize : "60px"}} className="mt-5 px-5 font-italic animate__animated animate__flipInX">Delivering the tools</p>
       <h1 style={{fontSize : "60px"}} className="ml-5 font-italic animate__animated animate__flipInX animate__delay-1s"  >you need to <br />succeed</h1>

       <p className="m-5 font-italic animate__animated animate__flipInX animate__delay-2s">
       Your business is our business, Software Engineers are <br />here to fuel-up your business. Quality is priority for us,<br /> because our reputation goes with it.
       </p>

       </div>

      

       

       </div>
       </div>

        </div>

        </>
    )
}


export default home