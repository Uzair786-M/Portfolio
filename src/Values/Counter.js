import React,{ useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSmile, faClock } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {

   



    const element1 = <CountUp start={0} end={350} redraw= {true}>
         {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    const element2 = <CountUp start={0} end={100} redraw= {true}>
         {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    const element3 = <CountUp end={5000} delay={0} redraw= {true}>
         {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>


    const Icon1 = <FontAwesomeIcon icon={faCheck} style={{ color: "white", fontSize: "30px" }} />
    const Icon2 = <FontAwesomeIcon icon={faSmile} style={{ color: "white", fontSize: "30px" }} />
    const Icon3 = <FontAwesomeIcon icon={faClock} style={{ color: "white", fontSize: "30px" }} />

    useEffect(() =>{
        Aos.init({duration:2000})
    },[])
    return (
        <>

            <div className="container-fluid" style={{fontFamily: 'Open Sans',backgroundImage: "linear-gradient(180deg, black, gray)"}}>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="text-white text-center mt-5 display-4 font-italic" style={{fontFamily:'Open-Sans'}}>Businesses rely on us</div>
                        <div className="text-white text-center font-italic">These amazing stats of happy customers around the world, trust our service.</div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center mt-5">
                            {Icon1}
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold display-4" data-aos="zoom-in">
                            {element1}
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold font-italic m-3 pb-5 h3" style={{fontFamily:'Open-Sans'}}>
                            Projects Completed
                </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center mt-5">
                            {Icon2}
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold display-4" data-aos="zoom-in">
                            {element2}
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold font-italic m-3 pb-5 h3" style={{fontFamily:'Open-Sans'}}>
                            Happy Clients
                </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center mt-5">
                            {Icon3}
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold display-4"  data-aos="zoom-in"  >
                            {element3}+
                        </div>

                        <div className="d-flex justify-content-center text-white font-weight-bold font-italic m-3 pb-5 h3" style={{fontFamily:'Open-Sans'}}>
                            Working Hours
                </div>

                    </div>

                </div>
            </div>

        </>
    )
}



export default Counter;