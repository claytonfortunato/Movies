import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=d899c202d848bc9981b4e775e2dfb764"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie();
      });
  });

  return <div>Movie</div>;
};

export default Movie;
