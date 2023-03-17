import React from "react";
import styles from "./FooterCard.module.css";

function FooterCard({ subject, title, text, email, btn_value }) {
  return (
    <div className={styles.container}>
      <div className={styles.texts_container}>
        <h1>{subject}</h1>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={styles.registration_container}>
          <input type="email" placeholder={email} />
          <button>{btn_value}</button>
        </div>
      </div>
      <div className={styles.img_container}></div>
    </div>
  );
}

export default FooterCard;
