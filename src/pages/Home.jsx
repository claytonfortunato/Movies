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
        console.log(data);
        setTopRated(data.results);
      });
  }, []);

  return (
    <div className="container">
      <h2>Melhores filmes</h2>
      <div className="container-movies">
        {topRated.map((movie) => (
          <MovieCard
            image={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
