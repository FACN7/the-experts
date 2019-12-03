import React from "react";
import Comment from "../Comment/Comment";
export default function CommentsList({ comments }) {
  if (Object.values(comments).length) {
    return (
      <div className="comments-list">
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  } else {
    return <div className="comments-list"></div>;
  }
}
