import React from "react";
import SeeButton from "../SeeButton/SeeButton";
import styles from "./AllSee.module.css";

function AllSee({ subject, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.sub_text}>
        <h2>{subject}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.btn_con}>
        <SeeButton text="See All"/>
      </div>
    </div>
  );
}

export default AllSee;
