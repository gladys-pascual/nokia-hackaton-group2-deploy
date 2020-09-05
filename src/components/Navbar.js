import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link exact to="/" style={{ textDecoration: 'none' }}>
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="logo-wrapper">

              <img className="logoNokia" src="/Logo/NOKIA_LOGO_RGB_HR.png" alt="Logo" />
              <div className="logoSeparator" />
              <div className="logoPhonesAnchor">Phones</div>
            </div>
            <div className="navbar-anchors-container-wrapper">
              <div className="navbar-anchors-container">
                  <div class="navbar-anchors">
                    Explore Android
                  </div>
                  <div class="navbar-anchors">
                    Android phones
                  </div>
                  <div class="navbar-anchors">
                    Classic phones
                  </div>
                  <div class="navbar-anchors">
                    For enterprises
                  </div>
                  <div class="navbar-anchors">
                    Community
                  </div>
                  <div class="navbar-anchors">
                    Support
                  </div>
              
              </div>
            </div>
            <div className="navbar-idiom-and-cart-container">

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
