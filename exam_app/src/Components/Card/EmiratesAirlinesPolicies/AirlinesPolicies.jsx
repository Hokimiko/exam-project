import React from "react";
import styles from "./AirlinesPolicies.module.css";

function AirlinesPolicies() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Emirates Airlines Policies</h1>
      <div className={styles.texts_container}>
        <div className={styles.text1_container}>
          <img src="./public/icons/blackTime.svg" alt="" />
          <p className={styles.texts}>
            Pre-flight cleaning, installation of cabin HEPA filters.
          </p>
        </div>
        <div className={styles.text1_container}>
          <img src="./public/icons/blackTime.svg" alt="" />
          <p className={styles.texts}>Pre-flight health screening questions.</p>
        </div>
      </div>
    </div>
  );
}

export default AirlinesPolicies;
