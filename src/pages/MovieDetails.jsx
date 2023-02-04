import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaWallet, FaStar } from "react-icons/fa";
import { BsGraphUp, BsHourglassSplit } from "react-icons/bs";
import { MdDescription } from "react-icons/md";

const API_IMG = "https://image.tmdb.org/t/p/w500";

import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatValor = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=d899c202d848bc9981b4e775e2dfb764&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-details">
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img src={API_IMG + movie.backdrop_path} alt="" />
          <p className="tagline">{movie.tagline}</p>
          <div className="details">
            <div className="budget">
              <h4>
                <FaWallet color="94e4eb" size={20} /> Orçamento
              </h4>
              <p>{formatValor(movie.budget)}</p>
            </div>
            <div className="revenue">
              <h4>
                <BsGraphUp color="94e4eb" size={20} /> Receita
              </h4>
              <p>{formatValor(movie.revenue)}</p>
            </div>
            <div className="runtime">
              <h4>
                <BsHourglassSplit color="94e4eb" size={20} /> Duração
              </h4>
              <p>{movie.runtime} Minutos</p>
            </div>
            <div className="vote">
              <h4>
                <FaStar color="94e4eb" size={20} /> Media
              </h4>
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <div className="description">
            <h4>
              <MdDescription color="94e4eb" size={20} /> Descrição
            </h4>
            <p>{movie.overview} </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
