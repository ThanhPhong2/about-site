import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="Back">
            <a>Back To Curcus</a>
          </div>
          <div className="Logo">
            <img
              src="svg/logo.svg"
              alt="Logo"
              style={{ width: 135 + "px", height: 31.99 + "px" }}
            />
          </div>
          <div className="Avatar">
            <img
              src="svg/hd_dp.jpg"
              alt="Avatar"
              style={{ width: 33 + "px", height: 33 + "px" }}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
