import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

import MovieCard from "../components/MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    setMovie(data.results);
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-details">
      {movie && (
        <>
          <Details title={movie.title} />
          <p className="tagline">{movie.title}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
