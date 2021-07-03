import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/">
          <img
            className="header_logo"
            src="https://material-kit-react.devias.io/static/logo.svg"
            alt=""
          />
        </Link>
      </div>

    </div>
  );
};

export default Header;
