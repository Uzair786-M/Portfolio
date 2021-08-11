import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {

    faFacebook,
    faTwitter,
    faInstagram,
    faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";

const Icon1 = <FontAwesomeIcon icon={faMapMarkerAlt} />
const Icon2 = <FontAwesomeIcon icon={faPhone} />
const Icon3 = <FontAwesomeIcon icon={faEnvelope} />
const Icon4 = <FontAwesomeIcon icon={faFacebook} size="3x" />
const Icon5 = <FontAwesomeIcon icon={faTwitter} size="3x" />
const Icon6 = <FontAwesomeIcon icon={faInstagram} size="3x" />
const Icon7 = <FontAwesomeIcon icon={faGooglePlusG} size="3x" />



const Footer = () => {
    return (
        <>

            <div className="container-fluid bg-dark text-white mt-5" style={{ fontFamily: "Open Sans", boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)", backgroundImage: "linear-gradient(180deg, black, gray)" }} id="Footer">

                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <img src="logo.png" className="mt-5 px-5" />

                        <p className="font-italic mt-5 px-5">We are a young company always looking for new and creative ideas to help you with our products in your everyday work.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <h1 className="font-italic  mt-5 px-5">Contact</h1>
                        <ul>
                            <li><div className="mt-4 px-2">{Icon1}<span className="mx-3 font-italic">Islamabad,Pakistan</span></div></li>

                            <li><div className="mt-4 px-2">{Icon2}<span className="mx-3 font-italic">Phone:<tel tel="+923471056128">+923471056128</tel></span></div></li>

                            <li><div className="mt-4 px-1">{Icon3}<span className="mx-1 font-italic">Email:<email>Uzairmaqbool050@gmail.com</email></span></div></li>
                        </ul>








                    </div>








                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">

                        <h1 className="font-italic  mt-5 px-5">Follow us</h1>
                        <div className="mt-5">
                            <span className="m-4 px-2"><a href="#">{Icon4}</a></span>
                            <span className="m-4"><a href="#">{Icon5}</a></span>
                            <span className="m-4"><a href="#">{Icon6}</a></span>
                           
                            <hr className="w-50  bg-white rightmargin"/>
                            <p className="font-italic" style={{fontFamily:"Open Sans"}}>Platoearn Technologies Pvt Ltd © 2021. All Rights Reserved</p>
                        </div>
                        
                    </div>

                </div>

            </div>





        </>
    )
};


export default Footer;