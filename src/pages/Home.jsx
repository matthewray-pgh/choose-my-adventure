import React from "react";
import { Link } from "react-router-dom";
import { Cursor } from "../components/cursor.jsx";

import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__title">
        <h1 className="home__title--text">Choose Your Adventure ... </h1>
        <Cursor />
      </div>

      <menu className="home__menu">
        <div>
          <Link className="home__menu--link" to="/LostKey">Lost Key</Link>
        </div>
        <div>
          <Link className="home__menu--link" to="/">Second Story</Link>
        </div>
        <div>
          <Link className="home__menu--link" to="/">Third Story</Link>
        </div>
      </menu>
    </div>
  );
}