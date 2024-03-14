import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="sub">
      <div className="text-wrapper">T4Y</div>
      <SearchWrapper className="design-component-instance-node" />
      </div>
     <div className="sub">
      <Link to="/login">
     <img className="sign-in" alt="Sign in" src="./assets/sign_in.svg" />
      </Link>
      <BurgerMenu className="burger-menu-instance" />
     </div>
     
    </div>
  );
};

export default Header;
