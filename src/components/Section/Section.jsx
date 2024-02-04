import React from "react";
import { Link } from "react-router-dom";
import { constructImageUrl } from "../../utils";
import { FaStar } from "react-icons/fa";
import "./Section.sass";
function Section({ data, style }) {
  const filteredData = data.filter((item) => item.backdrop_path);
  return (
    <section className="section" style={style}>
      {filteredData.map((item, i) => (
        <Link to={`/page/${item.id}`} key={i}>
          <div className="section__item">
            <img src={constructImageUrl(item.backdrop_path)} alt="item" />
            <div className="section__wrap">
              <div className="section__title">{item.title}</div>
              <div className="section__rating">
                <span>
                  <FaStar />
                </span>
                {Math.floor(item.vote_average)}/10
              </div>
              <div className="section__date">
                <span>Release: </span>
                <span>{item.release_date.substring(0, 4)}</span>
              </div>
              <div>
                {item.overview.length < 300
                  ? item.overview
                  : item.overview.substring(0, 300) + "..."}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Section;
