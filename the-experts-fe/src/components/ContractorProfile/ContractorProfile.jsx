import React from "react";
import Contractor from "../contractor/contractor";
import "./ContractorProfile.css";

export default function ContractorProfile(props) {
  const contractor = props.location.state.contractor;
  // jamie try to dismiss this please this is for future use (tomorrow-plan) please.. :)
  const ContractorProfile = () => {
    fetch(`/getReview/${contractor.id}`).then(res => res.json());
  };

  return (
    <div className="ContractorProfile">
      <div className="contractorImage">
        <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" />
      </div>

      <h1 className="contractor-name"> {contractor.cont_name}</h1>
      <p className="contractor-description">{`${contractor.cont_name} is an experienced ${contractor.job} `}</p>
      <p className="contractor-rating">rating : {contractor.rating}</p>
      <p className="contractor-feedBacks">FeedBacks(23{}) </p>

      <button className="revealContact-btn"> reveal contact into </button>

      {/* jamie i know that i should not keep any commented nonfunctional code but it's just a reminder  */}
      {/* <Comment /> */}
    </div>
  );
}
