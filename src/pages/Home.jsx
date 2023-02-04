import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR";

import "./Home.scss";

const Home = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);

  return (
    <div className="container">
      <h1>Melhores filmes</h1>
      <div className="container-movies">
        {topRated.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
