import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faThumbsUp, faPodcast, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Icon1 = <FontAwesomeIcon icon={faTrophy} color="red"/>

const Icon2 = <FontAwesomeIcon icon={faThumbsUp} color="#384c74"/>
const Icon3 = <FontAwesomeIcon icon={faPodcast} color="#384c74"/>
const Icon4 = <FontAwesomeIcon icon={faUserFriends} color="#384c74"/>



const Success = () => {





    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="container-fluid" style={{fontFamily: 'Open Sans'}}>
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="row">


                            <div className="mx-5 px-3" style={{ fontSize: "30px" }}>{Icon1}</div>

                        </div>

                        <div className="row">
                            <div className="h2 mx-5 font-weight-bold px-3 font-italic" style={{fontFamily:'Open-Sans'}}>We are your path to success</div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="h4 mx-5 font-weight-bold px-3">{Icon2}    <span className="px-1 font-italic" style={{fontFamily:'Open-Sans'}}>Complete Solutions</span></div>
                            <p className="mx-5 px-5 font-italic">We offer A to Z solution for a successful launch. Starting from planning, Designing, Development, Testing, Hosting, Publishing and marketing</p>
                        </div>

                        <div className="row">
                            <div className="h4 mx-5 font-weight-bold px-3">{Icon3}    <span className="px-1 font-italic" style={{fontFamily:'Open-Sans'}}>One Window Operation</span></div>
                            <p className="mx-5 px-5 font-italic">You are at right place, though a single contact you can get all software related services.</p>
                        </div>

                        <div className="row">
                            <div className="h4 mx-5 font-weight-bold px-3">{Icon4}    <span className="px-1 font-italic" style={{fontFamily:'Open-Sans'}}>Cooperative Staff</span></div>
                            <p className="mx-5 px-5 font-italic">Our staff is trained for customer care, because customer satisfaction is our first priority. We offer free of cost one year support and guide service..</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="jumbotron" style={{ borderRadius: "50%" }} data-aos="zoom-in">

                            <div className="row">
                                <div className="col-6" data-aos="fade-right">
                                <img src="device.png" style={{zIndex:"100",position:"absolute",width:"60%"}}/>
                                    <img src="1.png"  style={{zIndex:"200",position:"relative",width:"57%",height:"83%",marginLeft:"4%",marginTop:"12%"}}/>
                                </div>

                                <div className="col-6" data-aos="fade-left">
                                <img src="device.png" style={{zIndex:"100",position:"absolute",width:"60%"}}/>
                                    <img src="2.png" style={{zIndex:"200",position:"relative",width:"57%",height:"83%",marginLeft:"4%",marginTop:"12%"}} />
                                </div>

                            </div>


                        </div>


                    </div>

                </div>

                
            </div>

        </>
    )
}



export default Success;