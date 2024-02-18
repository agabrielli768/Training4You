import React from "react";
import logo from "../logo.svg";
import search_icon from "../search_icon.svg";
import signin from "../signin.svg";

function Header(props) {
  const navStyle = {
    backgroundColor: "#A3A3A3",
    justifyContent: "space-between",
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark" style={navStyle}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              width="100"
              height="100"
              className="d-inline-block align-text-center ml-1"
            />
            <img
              src={search_icon}
              alt="recherche"
              width="50"
              height="50"
              className="d-inline-block align-text-center ml-5"
            />
            <img
            src={signin}
            alt="recherche"
            width="50"
            height="50"
            className="d-inline-block align-text-center float-right"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
