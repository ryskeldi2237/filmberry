import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Comments from "../../components/Comments/Comments";
import Footer from "../../components/Footer";
import PageDetails from "../../components/PageDetails";
import { useGetMovieDetailsQuery } from "../../store/movies";
import Section from "../../components/Section/Section";

function MoviePage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data, isLoading } = useGetMovieDetailsQuery({ id });
  
  return (
    <>
      <Header />
      <div className="container">
        {data && (
          <>
            <PageDetails data={data} 
              isLoading={isLoading}
            />
            <Comments data={data} />
            <span className="recommended">Recommendation</span>
            <Section
              data={data.recommendations.results}
              style={{ flexWrap: "nowrap", overflowX: "auto" }}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MoviePage;
