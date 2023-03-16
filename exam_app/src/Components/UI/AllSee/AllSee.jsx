import React from "react";
import styles from "./AllSee.module.css";

function AllSee({ subject, text, btn_text }) {
  return (
    <div className={styles.container}>
      <div className={styles.sub_text}>
        <h2>{subject}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.btn_con}>
        <button>{btn_text}</button>
      </div>
    </div>
  );
}

export default AllSee;
