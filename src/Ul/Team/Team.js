import React, { useEffect } from "react";
import TeamCard from "./TeamCard";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Team.css";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container bg-contrast" id="Team">
        <div className=" text-center">
          <h2 className="font-weight-bold display-4">Meet the Team</h2>
          <p className="text-secondary">Pride of DreamCoders</p>
        </div>
        <div className="row mt-5">
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="sabtain.jpeg"
              name="Sabtain Abbas"
              designation="FOUNDER & CEO"
              description="This guy started it all, And leading it now"
              qualification="Soft Engineering"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="Muzammil.jpeg"
              name="Muzammil Hussain"
              designation="PROJECT MANAGER"
              description="He Manages the team and projects orderly."
              qualification="Soft Engineering"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="hamza.jpeg"
              name="Hamza Javed"
              designation="PROJECT Bidder"
              description="He knows how to deal with the clients.."
              qualification="Computer Science"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="Ahmed.jpeg"
              name="Ahmed Khawaja"
              designation="Web Developer"
              description="Web Development is a piece of cake for him."
              qualification="Soft Engineering"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="Uzair.jpg"
              name="Uzair Maqbool"
              designation="React Js Developer"
              description="He plays with Web Application"
              qualification="Soft Engineering"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="fartash.jpeg"
              name="Hafiz Fartash Aziz"
              designation="Frontend Developer"
              description="He plays with the UI/UX and Web interface"
              qualification="Computer Science"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="Moaz.jpeg"
              name="Moaz Farooq"
              designation="Graphic Designer"
              description="This guy knows better how to deal with Graphics"
              qualification="Bachelor in Computer & arts"
            />
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-12 height"
            data-aos="flip-left"
          >
            <TeamCard
              img="Malik.jpeg"
              name="Malik Ali Raza"
              designation="Marketing Exceutive"
              description="Skilled marketer! He knows how to deal with clients."
              qualification="Business Administration"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Team;
