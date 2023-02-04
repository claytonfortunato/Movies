import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
const Key = "d899c202d848bc9981b4e775e2dfb764";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=d899c202d848bc9981b4e775e2dfb764&query=${query}`;
    getSearchedMovies(searchUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movieReq) => (
            <MovieCard key={movieReq.id} movie={movieReq} />
          ))}
      </div>
    </div>
  );
};

export default Search;
