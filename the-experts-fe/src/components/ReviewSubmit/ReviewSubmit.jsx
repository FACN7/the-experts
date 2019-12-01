import React, { useState, useEffect } from "react";
import "./ReviewSubmit.css";
import FaBeer from "react-icons/lib/fa/beer";

export default function ReviewForm({ user_id, contractor_id }) {
  const [review, setReview] = useState({ reviewBody: "", isliked: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = { user_id, contractor_id, reviewBody, isliked };
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
  const handleChange = ({ currentTarget: input }) => {
    console.log(input);
    review[input.name] = input.value;
    setReview({ ...review });
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ReviewMe"
            value={review.reviewBody}
            name="reviewBody"
            onChange={handleChange}
            required
            minLength="3"
          />

          <input
            type="checkbox"
            value={review.isliked ? "unlike" : "like"}
            selected={review.isliked}
            onChange={() => {
              review.isliked = !review.isliked;
              setReview({ ...review });
            }}
          ></input>
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
