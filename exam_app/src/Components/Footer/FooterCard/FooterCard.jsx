import React from "react";
import styles from "./FooterCard.module.css";

function FooterCard() {
  return (
    <div className={styles.container}>
      <div className={styles.texts_container}>
        <h1>Subscribe Newsletter</h1>
        <h4>The Travel</h4>
        <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
        <div className={styles.registration_container}>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.img_container}></div>
    </div>
  );
}

export default FooterCard;
