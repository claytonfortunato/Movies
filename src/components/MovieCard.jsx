import React from "react";

import { FaStar } from "react-icons/fa";

const API_IMG = "https://image.tmdb.org/t/p/w500";

import "./MovieCard.scss";

const Movie = ({ poster, title, vote }) => {
  return (
    <div className="container-movie">
      <h4>{title}</h4>
      <img src={API_IMG + poster} alt="" />
      <p>
        <FaStar color="yellow" /> {vote}
      </p>
      <button className="btn-details">Detalhes</button>
    </div>
  );
};

export default Movie;
