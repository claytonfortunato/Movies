import React from "react";
import { Link } from "react-router-dom";

import { MdLocalMovies } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <MdLocalMovies size={40} color="#94E4EB" />
        <Link to="/">
          <h4>Movies</h4>
        </Link>
      </div>

      <form className="nav-search">
        <input type="text" placeholder="Pesquisar filme.." />
        <button>
          <BsSearch color="#94E4EB" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
