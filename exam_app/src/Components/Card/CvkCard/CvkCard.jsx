import React from "react";
import styles from "./CvkCard.module.css";
import SeeButton from "../../UI/SeeButton/SeeButton";
import Button from "../../UI/Button/Button";
function CvkCard({ city, price, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img className={styles.img} src={img} />
      </div>
      <div className={styles.card}>
        <div className={styles.card_content}>
          <div className={styles.title_price}>
            <h1 className={styles.title}>CVK Park Bosphorus Hotel {city}</h1>
            <div className={styles.card_price}>
              <h5 className={styles.price_h5}>starting from</h5>
              <h1 className={styles.price_h1}>{price}</h1>
              <h6 className={styles.price_h6}>excl. tax</h6>
            </div>
          </div>
          <div className={styles.location_container}>
            <img src="./public/icons/location.svg" alt="" />
            <p className={styles.location}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </p>
          </div>
          <div className={styles.starsHotel}>
            <div className={styles.stars}>
              <div className={styles.starsImg}>
                <img src="./public/icons/rebStar.svg" alt="" />
                <img src="./public/icons/rebStar.svg" alt="" />
                <img src="./public/icons/rebStar.svg" alt="" />
                <img src="./public/icons/rebStar.svg" alt="" />
                <img src="./public/icons/rebStar.svg" alt="" />
              </div>
              <p className={styles.starsText}>5 Star Hotel</p>
            </div>
            <div className={styles.aminities}>
              <img
                className={styles.coffeIcon}
                src="./public/icons/coffe.svg"
                alt=""
              />
              <p className={styles.aminitiesText}>20+ Aminities</p>
            </div>
          </div>
          <div className={styles.grade_container}>
            <SeeButton text="4.2" />
            <h3 className={styles.grade_text}>
              <strong>Very Good </strong> 371 reviews
            </h3>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.buttons_container}>
          <SeeButton icon="./public/img/heart.svg" />
          <button className={styles.btn}>View Place</button>
        </div>
      </div>
    </div>
  );
}

export default CvkCard;
