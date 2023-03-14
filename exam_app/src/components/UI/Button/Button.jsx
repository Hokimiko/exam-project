import React from "react";
import styles from "./Button.module.css";

const Button = ({ icon, text }) => {
  return (
    <button className={styles.button}>
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default Button;
