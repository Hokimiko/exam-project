import React from "react";
import Button from "../../../../UI/Button/Button";
import styles from "./FlightSelection2.module.css";

function FlightSelection2() {
  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            value="Lahore - Karachi"
            readOnly
          />
          <select className={styles.select} name="" id="">
            <option value="">Return</option>
          </select>
          <input className={styles.input} type="date" />
          <input
            className={styles.input}
            type="text"
            value="1 Passenger, Economy"
          />
          <Button icon="./public/img/search.svg" />
        </div>
      </div>
    </div>
  );
}

export default FlightSelection2;
