import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LinkWrapper.module.css";

const LinkWrapper = ({ to, children }) => {
  return (
    <NavLink to={to}>
      <div className={styles.container}>
        <div className={styles.tab}>{children}</div>
      </div>
    </NavLink>
  );
};

export default LinkWrapper;
