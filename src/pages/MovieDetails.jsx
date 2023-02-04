import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

import MovieCard from "../components/MovieCard";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieDetails = (image) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-details">
      {movie && (
        <>
          <MovieCard image={image} title={movie.title} />
          <p className="tagline">{movie.tagline}</p>
          <p>{movie.runtime} minutos</p>
          <p>{movie.overview} </p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
