import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link exact to="/" style={{ textDecoration: 'none' }}>
        <div>
          <div className="navbar">
            <div className="logo-wrapper">
              <img className="logoNokia" src="/Logo/NOKIA_LOGO_RGB_HR.png" alt="Logo" />
              <div className="logoSeparator" />
              <div className="logoPhonesAnchor">Phones</div>
            </div>
            
          </div>
          <div></div>
          <div></div>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
