import React, { useState } from "react";
import styles from "./AddBankCard.module.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";

function AddBankCard({click}) {
 
  return (
    <div className={styles.card} onClick={click}>
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
