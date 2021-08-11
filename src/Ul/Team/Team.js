import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Team.css';

const Team = () =>{

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return(
        <>
<div className="container" id="Team">
    <div className="row">
        <div className="col" style={{fontFamily:"Open Sans",textAlign:"center"}}>
<h3>Meet Our Team</h3>
<p color="gray">Pride of Platoearn</p>
        </div>
    </div>

<div className="row">

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">

<div className="card mx-3" style={{width: "18rem"}} data-aos="flip-left">
  <img src="Uzair.jpg" className="card-img-top" alt="Uzair Pic"/>
  <div className="card-body">
    <h5 className="card-title">Uzair Maqbool</h5>
    <p className="card-text">Web Developer</p>
  
  </div>
</div>

</div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center height">

<div className="card mx-3" style={{width: "18rem"}} data-aos="flip-left">
  <img src="Usama.png" className="card-img-top" alt="Usama Pic"/>
  <div className="card-body">
    <h5 className="card-title">Mohammad Usama</h5>
    <p className="card-text">Android Developer</p>
  
  </div>
</div>

</div>


</div>


</div>

<br />
<br />

        </>
    )
};



export default Team;