import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Icon1 = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const Icon2 = <FontAwesomeIcon icon={faPhone} />;
const Icon3 = <FontAwesomeIcon icon={faEnvelope} size="1x" />;
const Icon4 = <FontAwesomeIcon icon={faFacebook} size="3x" color="#3b5998" />;
const Icon5 = <FontAwesomeIcon icon={faTwitter} size="3x" color="#00acee" />;
const Icon6 = <FontAwesomeIcon icon={faInstagram} size="3x" color="#fb3958" />;

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white mt-5"
        style={{
          fontFamily: "Open Sans",
          boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          backgroundImage: "linear-gradient(180deg, #2b354f, #2b354f)",
        }}
        id="Footer"
      >
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <img
              src="Logo1.png"
              className="mx-5 img-responsive w-50"
              alt="logo"
            />

            <p className="font-italic mt-5 px-5">
              We are a young company always looking for new and creative ideas
              to help you with our products in your everyday work.
            </p>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <h1 className="font-italic  mt-5 px-5">Contact</h1>
            <ul>
              <li>
                <div className="mt-4 px-2">
                  {Icon1}
                  <span
                    className="mx-3 font-italic"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Address:
                    <a href="https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.6163723,72.805909,10z/data=!3m1!4b1!4m5!3m4!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!8m2!3d33.6844202!4d73.0478848">
                      Islamabad,Pakistan
                    </a>
                  </span>
                </div>
              </li>

              <li>
                <div className="mt-4 px-2">
                  {Icon2}
                  <span
                    className="mx-3 font-italic"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Phone:<a href="+923120543635">+923120543635</a>
                  </span>
                </div>
              </li>

              <li>
                <div className="mt-4 px-1">
                  {Icon3}
                  <span
                    className="mx-1 font-italic"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Email:
                    <a href="mailto:contactdreamcoder@gmail.com">
                      contactdreamcoder@gmail.com
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="d-flex justify-content-center">
              <h1 className="font-italic mt-5 ">Follow us</h1>
            </div>

            <div className="mt-5 d-flex justify-content-center">
              <span className="mx-5 ">
                <a href="https://web.facebook.com/?_rdc=1&_rdr">{Icon4}</a>
              </span>
              <span className="mx-5">
                <a href="https://twitter.com/?lang=en">{Icon5}</a>
              </span>
              <span className="mx-5">
                <a href="https://www.instagram.com/?hl=en">{Icon6}</a>
              </span>
            </div>
            <div>
              <hr className="w-50  bg-white " />
              <p className="font-italic" style={{ fontFamily: "Open Sans" }}>
                DreamCoders Technologies Pvt Ltd © 2021. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
