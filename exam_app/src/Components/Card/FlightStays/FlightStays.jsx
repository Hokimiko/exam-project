import React from "react";
import styles from "./FlightStays.module.css";

function FlightStays() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subject_container}>
        <h1 className={styles.h1}>Tickets/Bookings</h1>
        <select className={styles.select} name="" id="">
          <option className={styles.options} value="">
            Upcoming
          </option>
          <option className={styles.options} value="">
            Upcoming
          </option>
          <option className={styles.options} value="">
            Upcoming
          </option>
        </select>
      </div>

      <div className={styles.container}>
        <div className={styles.flight}>
          <img className={styles.img} src="./public/icons/plane.png" alt="" />
          <h4 className={styles.h4}>Flight</h4>
        </div>
        <div className={styles.line}></div>
        <div className={styles.stays}>
          <img className={styles.img} src="./public/icons/bed.png" alt="" />
          <h4 className={styles.h4}>Stays</h4>
        </div>
      </div>
    </div>
  );
}

export default FlightStays;
