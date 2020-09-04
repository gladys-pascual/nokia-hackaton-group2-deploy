import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link exact to="/">
        <button>where logo will go, brings back to homepage</button>
      </Link>
    </header>
  );
};

export default Navbar;
