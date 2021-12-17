import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faAngleLeft,
  faAngleRight,
  faStar,
  faChartLine,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import "./Benefit.css";
const Icon1 = <FontAwesomeIcon icon={faCheckCircle} color="red" />;
const Icon2 = <FontAwesomeIcon icon={faAngleLeft} color="#6f42c1" />;
const Icon3 = <FontAwesomeIcon icon={faAngleRight} color="#6f42c1" />;
const Icon4 = <FontAwesomeIcon icon={faStar} color="#6f42c1" />;
const Icon5 = <FontAwesomeIcon icon={faChartLine} color="#6f42c1" />;
const Icon6 = <FontAwesomeIcon icon={faWrench} color="#6f42c1" />;

const Benefit = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // #6442ad

  return (
    <>
      <div
        className="container-fluid"
        style={{ fontFamily: "Open Sans" }}
        id="Val"
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="jumbotron"
              style={{ borderRadius: "50%" }}
              data-aos="zoom-in"
            >
              <div className="row">
                <div className="col-6" data-aos="fade-right">
                  <img
                    src="device.png"
                    alt="mobilePic"
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      width: "60%",
                    }}
                  />
                  <img
                    src="1.png"
                    alt="nativeUIPic"
                    style={{
                      zIndex: "200",
                      position: "relative",
                      width: "57%",
                      height: "83%",
                      marginLeft: "4%",
                      marginTop: "12%",
                    }}
                  />
                </div>

                <div className="col-6" data-aos="fade-left">
                  <img
                    src="device.png"
                    alt="decivePic"
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      width: "60%",
                    }}
                  />
                  <img
                    alt="UI Pic"
                    src="2.png"
                    style={{
                      zIndex: "200",
                      position: "relative",
                      width: "57%",
                      height: "83%",
                      marginLeft: "4%",
                      marginTop: "12%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              <div
                className="col-xl-12 col-lg-12 col-md-5 col-sm-5 mt-5 mx-5 px-3"
                style={{ fontSize: "30px" }}
              >
                {Icon1}
              </div>
            </div>

            <div className="row">
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 font-italic  mx-5 font-weight-bold px-3"
                style={{ fontFamily: "Open-Sans" }}
              >
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
                <div style={{ fontSize: "30px" }}>
                  {Icon2}
                  {Icon3}
                  <span
                    className="h3 mx-2 font-italic"
                    style={{ fontFamily: "Open-Sans" }}
                  >
                    Agile Development
                  </span>
                </div>
                <p className="mx-5 font-italic">
                  You can add or do minor modifications during in the
                  requirements during development.
                </p>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                <div style={{ fontSize: "30px" }}>
                  {Icon4}
                  <span
                    className="h3 mx-2 font-italic"
                    style={{ fontFamily: "Open-Sans" }}
                  >
                    Project Tracking
                  </span>
                </div>
                <p className="mx-5 font-italic">
                  You will be able to track your project progress on a project
                  management tool.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                <div style={{ fontSize: "30px" }}>
                  {Icon5}
                  <span
                    className="h3 mx-2 font-italic"
                    style={{ fontFamily: "Open-Sans" }}
                  >
                    Free Publish
                  </span>
                </div>
                <p className="mx-5 font-italic">
                  We offer free deployment service, for play store and App
                  store.
                </p>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Res">
                <div style={{ fontSize: "30px" }}>
                  {Icon6}
                  <span
                    className="h3 mx-2 font-italic"
                    style={{ fontFamily: "Open-Sans" }}
                  >
                    One Year Support
                  </span>
                </div>
                <p className="mx-5 font-italic">
                  We offer guide and maintenance support for one year, free of
                  cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
