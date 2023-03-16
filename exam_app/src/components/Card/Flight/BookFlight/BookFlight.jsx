import React from "react";
import Button from "../../../UI/Button/Button";
import styles from "./BookFlight.module.css";

function BookFlight({ img }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_con}>
        <img src={img} alt="" />
      </div>
      <div className={styles.city_price}>
        <div className={styles.city_con}>
          <h2>Melbourne</h2>
          <p>An amazing journey</p>
        </div>
        <div className={styles.price_con}>
          <h2>$ 700</h2>
        </div>
        <div className={styles.btn_con}>
          <button className={styles.btn}>Book Flight</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <BookFlight img="../public/img/Melbourne 1.png" /> */
}

export default BookFlight;
