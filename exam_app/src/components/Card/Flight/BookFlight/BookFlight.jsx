import React from "react";
import Button from "../../../UI/Button/Button";
import styles from "./BookFlight.module.css";

function BookFlight({ img, city, text, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_con}>
        <img src={img} alt="" />
      </div>
      <div className={styles.city_price}>
        <div className={styles.city_con}>
          <h2>{city}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.price_con}>
          <h2>{price}</h2>
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
