import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <h1>Show Me The Movies</h1>
      <div>
        <Link to="/"> 🏠 Home </Link>
        <Link to="/add-movie">🎬  Add Movie </Link>
      </div>
    </div>
  );
};

export default Header;
