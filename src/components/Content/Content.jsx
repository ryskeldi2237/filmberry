import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Paginate from "../Paginate";
import { useGetMoviesQuery, useGetGenresQuery } from "../../store/movies";
import ListSkeleton from "../Skeletons/ListSkeleton";
import Section from "../Section/Section";
import "./Content.sass";
function Content() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [activeGenre, setActiveGenre] = useState('');
  const genre = useGetGenresQuery();
  const { data, isLoading } = useGetMoviesQuery({
    value: searchValue,
    activePage,
    activeGenre
  });
  if (genre.isLoading) {
    return <div className="genre__loading">Loading genres...</div>;
  }

  if (genre.isError) {
    return (
      <div className="genre__error">
        Error loading genres. Please try again later.
      </div>
    );
  }

  const visibleGenres = genre.data && genre.data.genres.slice(0, 8);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const getCategory = (genre) => {
    if(activeGenre !== genre.id){
      setActiveGenre(genre.id)
    }else{
      setActiveGenre("")
    }
  };
  return (
    <div className="content">
      <div className="container">
        <ul className="content__genre">
          {visibleGenres.map((genre) => (
            <li key={genre.id} className={`content__genre-item ${activeGenre === genre.id ? 'active' : ''}`} onClick={() => getCategory(genre)}>
            {genre.name}
          </li>          
          
          ))}
        </ul>
        <div className="content__wrapper">
          <div className="recommended">Discover</div>
          <div className="content__search">
            {!isSearchFocused ? (
              <IoIosSearch
                className="content__search"
                onClick={() => setIsSearchFocused(true)}
              />
            ) : (
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                onBlur={() => setIsSearchFocused(false)}
              />
            )}
          </div>
          {isLoading ? <ListSkeleton /> : <Section data={data.results} />}
          {!searchValue && (
            <Paginate activePage={activePage} setActivePage={setActivePage} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
