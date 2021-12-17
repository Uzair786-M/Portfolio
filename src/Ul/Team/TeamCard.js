import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Icons = <FontAwesomeIcon icon={faAward} size="2x" color="#6f42c1" />;
const TeamCard = (props) => {
  return (
    <>
      <div className="card b-3 h-100 ">
        <div className="card-body  d-flex flex-column align-items-center">
          <img
            className=" rounded-circle mt-n5 mb-4 w-50"
            src={props.img}
            alt="..."
          />
          <h6 className="font-weight-bold font-l">{props.name}</h6>
          <p className="small mt-0 text-primary text-uppercase">
            {props.designation}
          </p>
          <p className="text-center font-italic text-secondary">
            {props.description}
          </p>
          <hr className="w-75" />

          {Icons}
          <p className="text-center mt-4 text-secondary">
            {props.qualification}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
