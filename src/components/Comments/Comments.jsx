import React, { useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import CommentItem from "./CommentItem";
import './Comments.sass'
function Comments({ data }) {
  const [displayAll, setDisplayAll] = useState(false);

  const reviews = displayAll
    ? data.reviews.results
    : data.reviews.results.slice(0, 2);
  const toggleExpand = () => {
    setDisplayAll(!displayAll);
  };
  return (
    <div className="comment">
      <div className="comment__inner">
        <IoChatboxEllipsesOutline className="comment__icon" />
        <div className="title">Thoughts</div>
      </div>
      <div className="comment__wrap">
        <div className="comment__inner">
          <CiUser className="comment__user" />
          <input type="text" placeholder="Comment" className="comment__input" />
          <button className="comment__button">Submit</button>
        </div>
        {reviews &&
          reviews.map((item, index) => <CommentItem item={item} key={index} />)}
        {reviews.length === 0 ? (
          <div className="comment__extend all">No comments yet</div>
        ) : (
          <div className="comment__extend all" onClick={toggleExpand}>
            {!displayAll ? "All comments " : "Less comments"}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
