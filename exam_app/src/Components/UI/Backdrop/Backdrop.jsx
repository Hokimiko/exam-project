import React from "react";
import styles from "./Backdrop.module.css";
import clsx from "clsx";

const Backdrop = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active ? clsx([styles.backdrop, styles.active]) : styles.active
      }
      onClick={() => setActive(false)}
    >
      {children}
    </div>
  );
};

export default Backdrop;
