import React, { useState, useEffect } from "react";
import "./ReviewSubmit.css";

export default function ReviewForm({ user_id = 1, contractor_id = 1 }) {
  const [review, setReview] = useState({ reviewBody: "", isliked: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      user_id,
      contractor_id,
      reviewBody: review.reviewBody,
      isliked: review.isliked
    };
    // make a post request with the contractor object to ebraheem
    fetch("/addReview", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => console.log(err));
    // redirect to another page
  };
  const handleChange = ({ currentTarget: input }) => setReview({ ...review, [input.name]: input.value });

  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="rev-form">
          <div className="rev-container">
            <input
              type="text"
              placeholder="ReviewMe"
              value={review.reviewBody}
              name="reviewBody"
              onChange={handleChange}
              required
              minLength="3"
            />

            <i
              className={
                review.isliked ? "fa fa-thumbs-up" : "fa fa-thumbs-down"
              }
              value={review.isliked ? "unlike" : "like"}
              selected={review.isliked}
              onClick={() => setReview({ ...review, isliked: !review.isliked })}
            ></i>
          </div>
          <div className="form-btn">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
