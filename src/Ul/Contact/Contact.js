import React,{ useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";

const Icon = <FontAwesomeIcon icon={faCheckCircle}/>

const Contact = () => {

  
  useEffect(() => {
    Aos.init({duration : 2000});
},[])

    return (
        <>
            <div className="container-fluid" style={{fontFamily: 'Open Sans'}} id="Contact">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="card w-75 mx-5" data-aos="fade-right" style={{boxSizing:"border-box",boxShadow:"0 5px 15px 0px rgba(0,0,0,0.6)"}}>
  <div className="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.9" d="M0,224L60,208C120,192,240,160,360,176C480,192,600,256,720,288C840,320,960,320,1080,304C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <h1 className="card-title  font-italic mt-2">Contact us</h1>
    
    <form>
  <div className="form-group">
    <label for="name">Full Name</label>
    <input type="text" className="form-control" id="name" placeholder="Full Name"/>
  </div>
  <div className="form-group">
    <label for="whatsapp">Whatsapp</label>
    <input type="number" className="form-control" id="whatsapp" placeholder="Whatsapp"/>
  </div>

  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>
</form>
    <div >
    <button type="button" className="btn btn-dark btn-lg mt-3">Request a Quote</button>
    </div>
    
   
  
</div>
</div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5 pt-5">
<h3 className="text-info">Welcome,Welcome</h3>
<p className="display-4">We are listening to you!</p>
<p>If you have any project idea and you want to develop, just fill in the form, we're sure we can build great things together</p>

<div className="row">
<div className="col-6 mt-5">
{Icon}<span className="mx-4">Deal Agreement</span>
</div>

<div className="col-6 mt-5">
{Icon}<span className="mx-4">Payment in Installments</span>
</div>
</div>

<div className="row">
<div className="col-6 mt-5">
{Icon}<span className="mx-4">Project Tracking</span>
</div>

<div className="col-6 mt-5">
{Icon}<span className="mx-4">Quick Support</span>
</div>
</div>

                    </div>

                </div>
            </div>
        </>
    )
};

export default Contact;