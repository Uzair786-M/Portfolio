import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Services.css';
import { Obj1, Obj2, Obj3, Obj4, Obj5, Obj6, Obj7, Obj8, Obj9 } from './Arr';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Pagination } from '@material-ui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faUtensils, faIndustry, faSmile, faPlane, faVolleyballBall, faCloud, faShieldAlt, faLaptopHouse, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
const element1 = <FontAwesomeIcon icon={faShoppingBag} size="2x" />
const element2 = <FontAwesomeIcon icon={faUtensils} size="2x" />
const element3 = <FontAwesomeIcon icon={faIndustry} size="2x" />
const element4 = <FontAwesomeIcon icon={faSmile} size="2x" />
const element5 = <FontAwesomeIcon icon={faPlane} size="2x" />
const element6 = <FontAwesomeIcon icon={faVolleyballBall} size="2x" />
const element7 = <FontAwesomeIcon icon={faCloud} size="2x" />
const element8 = <FontAwesomeIcon icon={faShieldAlt} size="2x" />
const element9 = <FontAwesomeIcon icon={faLaptopHouse} size="2x" />
const element10 = <FontAwesomeIcon icon={faLongArrowAltRight} />








const Services = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const [Image, setImage] = useState("planning.jpg")

    const [style, setStyle] = useState(false)


    const handleChange = (event, page) => {

        if (page == 1) {
            setImage("planning.jpg")
        } if (page == 2) {
            setImage("designing.jpg")
        } if (page == 3) {
            setImage("development.jpg")
        } if (page == 4) {
            setImage("testing.jpg")
        } if (page == 5) {
            setImage("publishing.jpg")
        }
    }

    useEffect(() => {
        setStyle(true)

    }, [style])

    return (
        <>


            <div className="container" style={{ fontFamily: 'Open Sans' }} id="Services">


                <div className="row">
                    <div className="col">
                        <h1 className="text-center mt-5"><span className="badge badge-secondary">Services</span></h1>
                        <p className="display-4 text-center"><b>What <strong>WE</strong> can develop for you</b></p>
                    </div>
                </div>

            </div>

            <div className="container" style={{ fontFamily: 'Open Sans',overflowX:"hiidden" }}>



                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">

                        <Card Cont={Obj1} Icon={element1} />
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up" >
                        <Card Cont={Obj2} Icon={element2} />

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj3} Icon={element3} />

                    </div>


                </div>

            </div>


            <div className="container" style={{ fontFamily: 'Open Sans',overflowX:"hiidden" }} >



                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj4} Icon={element4} />
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj5} Icon={element5} />

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj6} Icon={element6} />

                    </div>
                </div>
            </div>

            <div className="container" style={{ fontFamily: 'Open Sans',overflowX:"hiidden" }}>



                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj7} Icon={element7} />
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj8} Icon={element8} />

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4" data-aos="fade-up">
                        <Card Cont={Obj9} Icon={element9} />

                    </div>
                </div>

            </div>









             <div className="container-fluid mt-5" style={{overflowX:"hidden"}}>

                <div className="jumbotron">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <h1>Thinking about a new<br />project?</h1>
                            <h4>Let's try us</h4>
                            <p>We have everything you need.<br />Share the idea with us, we will bring <br />to life. Get a free quotation now!</p>

                            <p class="lead">
                                <a class="btn btn-dark btn-lg" href="#" role="button"><span style={{ fontSize: "15px", borderRadius: "5px 5px 5px 5px" }}>Choose the right plan</span> {element10}</a>
                            </p>

                            <div className="row">



                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                    <Pagination count={5} color="secondary" onChange={handleChange} />


                                </div>
                            </div>


                            <div className="row">

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                    <span ><button type="button" className="btn btn-link text-danger p-2" onClick={() => setImage("planning.jpg")}><span style={{ color: "red" }} onClick={() => setStyle()}>Planning</span></button></span>
                                    <span ><button type="button" className="btn btn-link text-danger p-2" onClick={() => setImage("designing.jpg")}><span style={{ color: "red" }} onClick={() => setStyle()}>Design</span></button></span>
                                    <span ><button type="button" className="btn btn-link text-danger p-2" onClick={() => setImage("development.jpg")}><span style={{ color: "red" }} onClick={() => setStyle()}>Development</span></button></span>
                                    <span ><button type="button" className="btn btn-link text-danger p-2" onClick={() => setImage("testing.jpg")}><span style={{ color: "red" }} onClick={() => setStyle()}>Testing</span></button></span>
                                    <span ><button type="button" className="btn btn-link text-danger p-2" onClick={() => setImage("publishing.jpg")}><span style={{ color: "red" }} onClick={() => setStyle()}>Publishing</span></button></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">

                            {style ? <div className="stylingImage"><img src={Image} className="w-100" data-aos="fade-left" /></div> : <img src={Image} className="w-75" data-aos="fade-left" />}

                        </div>

                    </div> 



                </div>
            </div>


        </>
    )
};



export default Services;