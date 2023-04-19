import React from "react";
import { Link } from "react-router-dom";

import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>

      <menu>
        <Link to="/LostKey">Lost Key</Link>
      </menu>
    </div>
  );
}