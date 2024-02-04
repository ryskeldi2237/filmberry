import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_API_KEY;

const api = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ value, activePage, activeGenre= ''}) => {
        const endpoint = value
          ? `search/movie?query=${value}&page=1`
          : `discover/movie?with_genres=${activeGenre}&page=${activePage}`;
        return {
          url: endpoint,
          params: {
            language: "en-US",
            api_key: apiKey,
          },
        };
      },
    }),
    getMovieDetails: builder.query({
      query: ({ id }) => {
        const endpoint = `movie/${id}?append_to_response=videos,reviews,recommendations`;
        return {
          url: endpoint,
          params: {
            language: "en-US",
            api_key: apiKey,
          },
        };
      },
    }),
    getGenres: builder.query({
      query: () => {
        const endpoint = `genre/movie/list`;
        return {
          url: endpoint,
          params: {
            language: "en-US",
            api_key: apiKey,
          },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery, useGetGenresQuery } =
  api;
export default api;
