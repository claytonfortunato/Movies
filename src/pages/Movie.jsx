import React, { useEffect, useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";

import "./Movie.scss";

const Movie = ({ poster, title, vote }) => {
  return (
    <div className="container-movie">
      <h4>{title}</h4>

      <img src={API_IMG + poster} alt="" />
      <p>{vote}</p>
    </div>
  );
};

export default Movie;
