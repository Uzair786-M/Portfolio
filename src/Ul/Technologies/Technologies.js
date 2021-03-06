import React from "react";

const Technologies = () => {
  return (
    <>
      <div
        className="fluid-container font-italic"
        id="Tech"
        style={{ overflowX: "hidden", marginTop: "5rem" }}
      >
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 m-5 p-5">
            <div className="h6 text-info">DON'T GO ANYWHERE</div>
            <div className="display-4" style={{ fontFamily: "Open-Sans" }}>
              A complete technology stack
            </div>
            <div className="text-justify" style={{ fontFamily: "Open Sans" }}>
              We are working on all well known platforms in order to fulfil the
              needs of our valuable customers. We prefer React native for
              Android and IOS development respectively. Because these are more
              stable and reliable yet. In web development we mostly prefer React
              Js for front end which is a widely used platform yet. Our
              developers are highly skilled and passionate, they follow the
              programming best practices during the development.
            </div>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-3  avatar container">
                <img
                  src="logo192.png"
                  className="w-75 img-responsive"
                  alt="React logo"
                />
              </div>

              <div className="col-3  avatar container">
                <img
                  src="logo2.png"
                  className="w-75 img-responsive"
                  alt="Laraval logo"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-3  avatar container">
                <img
                  src="logo3.png"
                  className="w-75 img-responsive"
                  alt="Node js logo"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-3  avatar container">
                <img
                  src="logo.4.png"
                  className="w-75 img-responsive"
                  alt="Material logo"
                />
              </div>

              <div className="col-3  avatar container">
                <img
                  src="logo5.png"
                  className="w-75 img-responsive"
                  alt="SQL logo"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-3  avatar container">
                <img
                  src="logo6.jpg"
                  className="w-100 img-responsive"
                  alt="Html logo"
                />
              </div>

              <div className="col-3  avatar container">
                <img
                  src="logo7.png"
                  className="w-100 img-responsive"
                  alt="Css logo"
                />
              </div>

              <div className="col-3  avatar container">
                <img
                  src="logo8.png"
                  className="w-75 img-responsive"
                  alt="JavaScript logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
