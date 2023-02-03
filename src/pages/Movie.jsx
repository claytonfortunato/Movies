import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=d899c202d848bc9981b4e775e2dfb764"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie();
      });
  });

  return (
    <div>
      Movie
      <div>
        {" "}
        {movie &&
          movie.map((movie) => {
            <div> {movie.title} </div>;
          })}
      </div>
    </div>
  );
};

export default Movie;
