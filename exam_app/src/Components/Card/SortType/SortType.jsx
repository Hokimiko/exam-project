import React from "react";
import styles from "./SortType.module.css";

function SortType() {
  return (
    <div className={styles.container}>
      <div className={styles.cheapers_container}>
        <h3>Cheapers</h3>
        <p>$99 . 2h 18m</p>
      </div>
      <div className={styles.best_ontainer}>
        <h3>Cheapers</h3>
        <p>$99 . 2h 18m</p>
      </div>
      <div className={styles.quickest_container}>
        <h3>Cheapers</h3>
        <p>$99 . 2h 18m</p>
      </div>
      <div className={styles.others_container}>
        <div className={styles.burger_container}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <h4>Other sort</h4>
        </div>
      </div>
    </div>
  );
}

export default SortType;
