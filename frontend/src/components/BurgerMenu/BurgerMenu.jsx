import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BurgerMenu = ({ className }) => {
  const [isActive, setIsActive] = useState(false)
  const manageOpenClass = () => {
    console.log("toto")
    setIsActive(!isActive)
  }
  return (
    <nav>
      <div className="menu-container">
      <div className="burger-icon" onClick={manageOpenClass}>
        &#9776;
      </div>
      <ul id="menu" className={isActive ? 'open': ''} >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/programme">Programmes</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default BurgerMenu;

/*
<div className={`burger-menu ${className}`}>
      <div className="rectangle" />
      <div className="div" />
      <div className="rectangle-2" />
    </div>
    */
