import React, { useEffect, useState } from "react";
import "./ContractorProfile.css";
import CommentsList from "../CommentsList/CommentsList";
import ReviewSubmit from "../ReviewSubmit/ReviewSubmit";
import {Link} from "react-router-dom"
export default function ContractorProfile(props) {
  const [profileReviews, setReviews] = useState([]);
  const contractor = props.location.state.contractor;
  useEffect(() => {
    fetch(`/getReview/${contractor.id}`)
      .then(profileReviews => profileReviews.json())
      .then(profileReviews => setReviews(profileReviews));
  }, []);

  return (
    <div className="ContractorProfile">
      <div className="contractorImage">
        <img
          src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
          alt="reviewer picture"
        />
      </div>

      <h1 className="contractor-name"> {contractor.cont_name}</h1>
      <p className="contractor-description">{`${contractor.cont_name} is an experienced ${contractor.job} `}</p>
      <p className="contractor-likes">likes : {contractor.likes}</p>
      <p className="contractor-feedBacks">
        FeedBacks({profileReviews.length}){" "}
      </p>

      <button className="revealContact-btn"> reveal contact into </button>
      <CommentsList comments={profileReviews} />
      <br />
      <div>
        {props.user.id ? (
          <span>Review Me</span>
        ) : (
          <span>{<Link to="/login">Sign in</Link> } to Review Me</span>
        )}
        <ReviewSubmit
          user_id={props.user.id}
          contractor_id={contractor.id}
          setReviews={setReviews}
        ></ReviewSubmit>
      </div>
    </div>
  );
}
