import React from "react";
import "./WhyUs.css";
// {firstParm,secondParam}
export default function WhyUs({ description1, description2, imageSrc }) {
  return (
    <React.Fragment>
      <div className="card">
        <img className="image" src={imageSrc} alt="Avatar" />
        <div className="container">
          <h5 className="card-title">
            <b>{description1}</b>
          </h5>
          <p className="card-description">{description2}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
