import React from "react";
import styles from "./AddBankCard.module.css";

function AddBankCard() {
  return (
    <div className={styles.card}>
      <div className={styles.ellipse_text}>
        <div className={styles.ellipse}>
          <img src="./public/icons/pluse.svg" alt="" />
        </div>
        <p className={styles.text}>Add a new card</p>
      </div>
    </div>
  );
}

export default AddBankCard;
