import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const API_IMG = "https://image.tmdb.org/t/p/w500";

import "./MovieCard.scss";

const Movie = ({ movie }) => {
  return (
    <div className="container-movie">
      <h4>{movie.title}</h4>
      <img src={API_IMG + movie.poster_path} alt={movie.title} />
      <p>
        <FaStar color="yellow" /> {movie.vote_average}
      </p>
      <Link to={`/movie/${movie.id}`}>
        <button className="btn-details">Detalhes</button>
      </Link>
    </div>
  );
};

export default Movie;
