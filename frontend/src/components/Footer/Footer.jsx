import React from "react";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <img className="img" alt="X" src="https://c.animaapp.com/3qAMEnpQ/img/5968958-1-1@2x.png" />
      <img className="img" alt="Facebook" src="https://c.animaapp.com/3qAMEnpQ/img/4701482-1-1@2x.png" />
      <img className="img" alt="Instagram" src="https://c.animaapp.com/3qAMEnpQ/img/image-1-1@2x.png" />
    </div>
  );
};
