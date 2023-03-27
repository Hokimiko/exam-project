import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./RecomendationForm.module.css";

const RecomendationForm = ({ img, text, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_text_container}>
        <div className={styles.img_container}>
          <img className={styles.img} src={img} alt="" />
        </div>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.price_button_container}>
        <div className={styles.price_container}>
          <h2 className={styles.price}>{price}/</h2>
          <p className={styles.price__text}>night</p>
        </div>
        <Button text="Book now" />
      </div>
    </div>
  );
};

export default RecomendationForm;
