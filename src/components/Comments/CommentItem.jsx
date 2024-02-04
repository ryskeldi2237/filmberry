import React from "react";
import { FaStar } from "react-icons/fa";
import './Comments.sass'
function CommentItem({item}) {
  const [expanded, setExpanded] = React.useState(false);
  const authorDetails = item.author_details;
  const path = authorDetails.avatar_path;
  const displayText = expanded ? item.content : item.content.slice(0, 300);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="comment__inner comment__wrapper">
      {path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${path}`}
          alt="user"
          className="comment__avatar"
        />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuXsaviLIPb3S629icV94cNbS7FM9XAC5N7k_w1FYlJmxqqErBLMQ1gFiXxH0Y9APPEQ&usqp=CAU"
          alt=""
          className="comment__avatar"
        />
      )}
      <div className="comment__item">
        <div className="comment__name">{item.author}</div>
        {authorDetails.rating && (
          <div className="comment__rating">
            <span>
              <FaStar />
            </span>
            {authorDetails.rating}/10
          </div>
        )}
        <p className="comment__text">
          {displayText}
          <span onClick={toggleExpand}>
            {!expanded ? "... Show More" : "Show Less"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CommentItem;
