import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ text = "Button", state, className }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`text-wrapper ${state}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["accueil", "default"]),
};
