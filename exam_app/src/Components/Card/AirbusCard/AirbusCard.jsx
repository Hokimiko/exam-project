import React from "react";
import styles from "./AirbusCard.module.css";

const AirbusCard = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <span className={styles.header__span}>
          <h1 className={styles.title}>Emirates A380 Airbus</h1>
          <p className={styles.price}>$240</p>
        </span>
        <span className={styles.header__span}>
          <h1 className={styles.subtitle}>Return Wed, Dec 8</h1>
          <p className={styles.time}>2h 28m</p>
        </span>
      </section>
      <section className={styles.main}>
        <div className={styles.card}>
          <img className={styles.img} src="./public/img/emirates.png" alt="" />
          <div className={styles.text}>
            <h1 className={styles.card_title}>Emirates</h1>
            <p className={styles.card_subtitle}>Airbus A320</p>
          </div>
        </div>
        <div className={styles.services}>
          <img src="./public/icons/plane.svg" alt="" />
          <div className={styles.split}></div>
          <img src="./public/icons/wifi.svg" alt="" />
          <div className={styles.split}></div>
          <img src="./public/icons/timer.svg" alt="" />
          <div className={styles.split}></div>
          <img src="./public/icons/fastfood.svg" alt="" />
          <div className={styles.split}></div>
          <img src="./public/icons/seat.svg" alt="" />
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footer__span}>
          <h1 className={styles.flight_time}>12:00 am</h1>
          <p className={styles.place}>Newark(EWR)</p>
        </div>
        <div className={styles.footer__span}>
          <div className={styles.arrow}></div>
          <img src="./public/icons/plane.svg" alt="" />
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.footer__span}>
          <h1 className={styles.flight_time}>12:00 am</h1>
          <p className={styles.place}>Newark(EWR)</p>
        </div>
      </section>
    </div>
  );
};

export default AirbusCard;
