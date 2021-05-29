import React,{ useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faAngleLeft,faAngleRight,faStar,faChartLine,faWrench } from '@fortawesome/free-solid-svg-icons';
import './Benefit.css';
const Icon1 = <FontAwesomeIcon icon={faCheckCircle} />
const Icon2 = <FontAwesomeIcon icon={faAngleLeft} />
const Icon3 = <FontAwesomeIcon icon={faAngleRight} />
const Icon4 = <FontAwesomeIcon icon={faStar} />
const Icon5 = <FontAwesomeIcon icon={faChartLine} />
const Icon6 = <FontAwesomeIcon icon={faWrench} />

const Benefit = () => {

useEffect(() =>{
    Aos.init({duration:2000})
},[])

    return (
        <>

            <div className="container-fluid" style={{fontFamily: 'Open Sans'}} id="Val">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="jumbotron" style={{ borderRadius: "400px 400px 400px 400px" }} data-aos="zoom-in">

                            <div className="row">
                                <div className="col-6" data-aos="fade-right">
                                    <img src="1.png" className="w-75" />
                                </div>

                                <div className="col-6" data-aos="fade-left">
                                    <img src="2.png" className="w-75" />
                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="row">

                            <div className="col-xl-12 col-lg-12 col-md-5 col-sm-5 mt-5 mx-5 px-3" style={{fontSize:"30px"}}>
                                {Icon1}
                            </div>

                        </div> 

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 font-italic  mx-5 font-weight-bold px-3" style={{fontFamily:'Open-Sans'}}>
                              <h2>We have a ton of benefits</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 font-italic  mx-5 font-weight-bold px-3">
                              <p>We never compromise on quality</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                            <div style={{fontSize:"30px"}}>{Icon2}{Icon3}<span className="h3 mx-2 font-italic" style={{fontFamily:'Open-Sans'}}>Agile Development</span></div>
                              <p className="mx-5 font-italic">You can add or do minor modifications during in the requirements during development.</p>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                            <div style={{fontSize:"30px"}}>{Icon4}<span className="h3 mx-2 font-italic" style={{fontFamily:'Open-Sans'}}>Project Tracking</span></div>
                              <p className="mx-5 font-italic">You will be able to track your project progress on a project management tool.</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                            <div style={{fontSize:"30px"}}>{Icon5}<span className="h3 mx-2 font-italic" style={{fontFamily:'Open-Sans'}}>Free Publish</span></div>
                              <p className="mx-5 font-italic">We offer free deployment service, for play store and App store.</p>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                            <div style={{fontSize:"30px"}}>{Icon6}<span className="h3 mx-2 font-italic" style={{fontFamily:'Open-Sans'}}>One Year Support</span></div>
                              <p className="mx-5 font-italic">We offer guide and maintenance support for one year, free of cost.</p>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

        </>
    )
}



export default Benefit;