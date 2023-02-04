import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdLocalMovies } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <MdLocalMovies size={40} color="#94E4EB" />
        <Link to="/">
          <h4>Movies</h4>
        </Link>
      </div>

      <form className="nav-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar filme.."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BsSearch color="#94E4EB" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
