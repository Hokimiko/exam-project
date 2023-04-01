import React from "react";
import styles from "./BankCard.module.css";

function BankCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber_container}>
        <div className={styles.cardNumber}>
          <p className={styles.stars}>**** **** ****</p>
          <h2 className={styles.h2}>4768</h2>
        </div>
        <div className={styles.bin_container}>
          <img src="./public/icons/Bin.svg" alt="" />
        </div>
      </div>
      <div className={styles.ValidThru_container}>
        <div className={styles.ValidThru}>
          <h4 className={styles.h4}>Valid Thru</h4>
          <h6 className={styles.h6}>02/27</h6>
        </div>
        <div className={styles.visa}>
          <img src="./public/icons/visa.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BankCard;
