import React,{ useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Contact.css';
import emailjs from 'emailjs-com';
const Icon = <FontAwesomeIcon icon={faCheckCircle}/>

const Contact = () => {

  
  useEffect(() => {
    Aos.init({duration : 2000});
},[])

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_8nhmdam', 'template_ruihcaa', e.target, 'user_Ccj0RQGs4vOxy8TT2Yxgl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
  e.target.reset();};

    return (
        <>
            <div className="container-fluid contact" style={{fontFamily: 'Open Sans'}} id="Contact">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="card w-75 mx-5" data-aos="fade-right" style={{boxSizing:"border-box",boxShadow:"0 5px 15px 0px rgba(0,0,0,0.6)"}}>
  <div className="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.9" d="M0,224L60,208C120,192,240,160,360,176C480,192,600,256,720,288C840,320,960,320,1080,304C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <h1 className="card-title  font-italic mt-2">Contact us</h1>
    
    <form onSubmit={sendEmail}>
  <div className="form-group">
    <label for="name">Full Name</label>
    <input type="text" className="form-control" id="name" placeholder="Full Name" name="name"/>
  </div>
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="email" className="form-control" id="Email" placeholder="Email" name="email"/>
  </div>


  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3" name="message"></textarea>
  </div>

  <div >
    <button type="submit" className="btn btn-dark btn-lg mt-3">Request a Quote</button>
    </div>

</form>
    
    
   
  
</div>
</div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-5 pt-5">
<h3 className="text-info">Welcome,Welcome</h3>
<p className="display-4">We are listening to you!</p>
<p>If you have any project idea and you want to develop, just fill in the form, we're sure we can build great things together</p>

<div className="row">
<div className="col-6 mt-5">
{Icon}<span className="mx-2">Deal Agreement</span>
</div>

<div className="col-6 mt-5">
{Icon}<span className="mx-2">Payment in Installments</span>
</div>
</div>

<div className="row">
<div className="col-6 mt-5">
{Icon}<span className="mx-2">Project Tracking</span>
</div>

<div className="col-6 mt-5">
{Icon}<span className="mx-2">Quick Support</span>
</div>
</div>

                    </div>

                </div>
            </div>
        </>
    )
};

export default Contact;