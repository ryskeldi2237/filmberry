import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "./PageDetails.sass";
import TrailerSkeleton from "../Skeletons/TrailerSkeleton";
function PageDetails({ data, isLoading }) {
  const formattedGenres = data.genres
    ? data.genres.map((genre) => genre.name).join(", ")
    : "";
  const releaseDate = data
    ? new Date(data.release_date).toLocaleDateString()
    : "";
  const runtimeHours = Math.floor(data.runtime / 60);
  const runtimeMinutes = data.runtime % 60;
  const formattedRuntime = `${runtimeHours} h ${runtimeMinutes} m`;
  let officialTrailer;
  try {
    officialTrailer = data.videos.results.find(
      (video) => video.type === "Trailer"
    );
  } catch (error) {
    console.log("Error:", error);
  }
  return (
    <>
      <div className="page__item">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt="img"
          className="page__poster"
        />
        <div className="page__wrap">
          <div className="title">{data.title}</div>
          <div className="page__details">
            Time : <span> {formattedRuntime}</span>
          </div>
          <div className="page__details">
            Date:<span> {releaseDate}</span>
          </div>
          <div className="page__details">
            Genre : <span>{formattedGenres}</span>
          </div>
          <div className="page__details">
            Language:<span> English</span>
          </div>
          <div className="page__details">
            Homepage :
            <span>
              <a href={data.homepage}> {data.homepage}</a>
            </span>
          </div>
          <div className="page__review">
            <div>
              <AiOutlineLike className="evaluate" />
              <span>1k</span>
            </div>
            <div>
              <AiOutlineDislike className="evaluate" />
              <span>0</span>
            </div>
          </div>
          <div className="page__buttons">
            <button className="watch-button">⏵ WATCH</button>
            <button className="watch-button download">Download</button>
          </div>
        </div>
      </div>
      <div className="page__wrapper">
        <div className="page__about">About the movie</div>
        <p className="page__desc">{data.overview}</p>
        {officialTrailer && !isLoading ? (
          <iframe
            title="Movie Trailer"
            height="500"
            src={`https://www.youtube.com/embed/${officialTrailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="page__video"
          ></iframe>
        ) : (
          <TrailerSkeleton />
        )}
      </div>
    </>
  );
}

export default PageDetails;
