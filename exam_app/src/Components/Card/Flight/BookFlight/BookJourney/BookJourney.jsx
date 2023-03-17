import React from "react";
import styles from "./BookJourney.module.css";

function BookJourney({ subject, text, price, img1, img2, img3, img4 }) {
  return (
    <div className={styles.container}>
      <div className={styles.journey_card}>
        <div className={styles.title_price}>
          <div className={styles.title_container}>
            <h2>Backpacking Sri Lanka</h2>
          </div>
          <div className={styles.price_container}>
            <h5>From</h5>
            <h2>$ 700</h2>
          </div>
        </div>
        <div>
          <p className={styles.text}>
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life. It helps us to forget about our
            problems, frustrations, and fears at home. During our journey, we
            experience life in different ways. We explore new places, cultures,
            cuisines, traditions, and ways of living.
          </p>
        </div>
        <div className={styles.btn_container}>
          <button>Book Flight</button>
        </div>
      </div>
      <div className={styles.img_container}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BookJourney;
