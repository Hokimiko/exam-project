import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({ icon, text, type, to }) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
      <NavLink to={to}>
        <p className={linkType(type)}>
          {text}
        </p>
      </NavLink>
    </div>
  );
};

function linkType(color) {
  if (color === "light") {
    return styles.link_light;
  } else if (color === "dark") {
    return styles.link_dark;
  }
}
export default Link;
