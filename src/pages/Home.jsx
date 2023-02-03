import React, { useEffect, useState } from "react";

const Home = () => {
  const [topRated, setTopRated] = useState([]);

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/api_key=d899c202d848bc9981b4e775e2dfb764"
    );
    const data = await res.json();

    setTopRated(data.results);
  };

  useEffect(() => {
    const topRatedUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d899c202d848bc9981b4e775e2dfb764";

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div> {topRated && topRated.map((movie) => <p>{movie.title}</p>)} </div>
  );
};

export default Home;
