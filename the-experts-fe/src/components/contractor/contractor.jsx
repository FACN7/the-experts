import React from "react";
import "./contractor.css";
export default function Contractor({ contractor }) {
  return (
    <div className="card-transition">
      <div className="contractor-card">
        <div className="contractor-img">
          <img
            src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            alt=""
          />
        </div>
        <div className="contractor-info">
          <h1 className="contractor-title">
            {contractor.cont_name}, {contractor.job}
          </h1>
          <p className="contractor-location">Haifa and north regions</p>
          <p className="contractor-rating">{contractor.rating}</p>
        </div>
      </div>
    </div>
  );
}