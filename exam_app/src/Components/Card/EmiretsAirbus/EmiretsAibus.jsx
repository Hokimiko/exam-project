import React from "react";
import styles from "./EmiretsAibus.module.css";
import Button from "../../UI/Button/Button";
import SeeButton from "../../UI/SeeButton/SeeButton";

function EmiretsAibus() {
  return (
    <div className={styles.emiretsAirbus_container}>
      <div className={styles.emiretsAirbus}>
        <h2 className={styles.h2}>Emirates A380 Airbus</h2>
        <div className={styles.location_container}>
          <img src="./public/icons/location.svg" alt="" />
          <p className={styles.locationText}>
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
        </div>
        <div className={styles.grade_container}>
          <div className={styles.grade}>4.2</div>
          <p className={styles.gradeText}>
            <strong>Very Good</strong> 54 reviews
          </p>
        </div>
      </div>
      <div className={styles.price_like_container}>
        <div className={styles.price_container}>
          <h2 className={styles.price}>$ 240</h2>
        </div>
        <div className={styles.like_button_container}>
          <SeeButton icon="./public/img/heart.svg" />
          <SeeButton icon="./public/icons/save.svg" />
          <Button text="Book now" />
        </div>
      </div>
    </div>
  );
}

export default EmiretsAibus;
