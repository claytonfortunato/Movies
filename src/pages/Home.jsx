import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR";

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
      {topRated.map((movie) => (
        <Movie
          image={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          vote={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default Home;
