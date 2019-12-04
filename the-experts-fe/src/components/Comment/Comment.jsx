import React from "react";
import "./Comment.css";

export default function Comment(CommentBody) {
  return (
    <div className="Comment">
      <img
        className="reviewer-img"
        src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
        alt=""
      />
      <p>{CommentBody.comment.reviewbody}</p>
      <p>{CommentBody.comment.isliked && `Liked 👍✔️`}</p>
    </div>
  );
}
