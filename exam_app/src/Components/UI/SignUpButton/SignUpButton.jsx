import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignUpButton.module.css";

const SignUpButton = ({ text, type, to }) => {
  return (
    <NavLink to={to}>
      <button className={btnType(type)}>{text}</button>
    </NavLink>
  );
};

function btnType(color) {
  if (color === "light") {
    return styles.btn_light;
  } else if (color === "dark") {
    return styles.btn_dark;
  }
}

export default SignUpButton;
