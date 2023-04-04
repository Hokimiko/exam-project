import React from "react";
import styles from "./PaymentMethodCard.module.css";
import Link from "../../../UI/Link/Link";

const PaymentMethodCard = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inp_radio}
        type="radio"
        name="pay"
        id="full"
        checked="checked"
      />
      <label className={styles.radio} for="full">
        <div className={styles.text}>
          <h1 className={styles.title}>Pay in full</h1>
          <p className={styles.subtitle}>Pay the total and you are all set</p>
        </div>
      </label>
      <input className={styles.inp_radio} type="radio" name="pay" id="part" />
      <label className={styles.radio} for="part">
        <div className={styles.text}>
          <h1 className={styles.title}>Pay part now, part later</h1>
          <p className={styles.subtitle}>
            Pay $207.43 now, and the rest ($207.43) will be automatically
            charged to the same <br /> payment method on Nov 14, 2022. No extra
            fees.
          </p>
        </div>
      </label>
      <div className={styles.link}>
        <Link text="More info" type="dark"/>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
