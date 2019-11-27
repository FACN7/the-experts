
import React from "react";
import "./WhyUs.css";
// {firstParm,secondParam}
export default function WhyUs({description1,description2,imageSrc}) {
  return (
    <React.Fragment>


<div className="card">
  <img className="image" src={imageSrc} alt="Avatar" />
  <div className="container">
    <h4><b>{description1}</b></h4> 
    <p>{description2}</p> 
  </div>
</div>

    </React.Fragment>
  );
}
