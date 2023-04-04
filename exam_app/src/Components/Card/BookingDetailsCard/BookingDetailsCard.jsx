import React from "react";
import styles from "./BookingDetailsCard.module.css";
import Rate from "../../UI/Rate/Rate";

const BookingDetailsCard = ({ img, subtitle, title, basefare, discount, taxes, fee, total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className={styles.rates_container}>
            <Rate text="4.2" />
            <p className={styles.reviews}>
              <b>Very Good</b> 54 reviews
            </p>
          </div>
        </div>
      </div>
      <div className={styles.split}></div>
      <h1 className={styles.pretitle}>
        Your booking is protected by <b>golobe</b>
      </h1>
      <div className={styles.split}></div>
      <div className={styles.price_details}>
        <h1 className={styles.price_title}>Price Details</h1>
        <span className={styles.price_span}>
          <p className={styles.service_name}>Base Fare </p>
          <p className={styles.price}>{basefare}</p>
        </span>
        <span className={styles.price_span}>
          <p className={styles.service_name}>Discount</p>
          <p className={styles.price}>{discount}</p>
        </span>
        <span className={styles.price_span}>
          <p className={styles.service_name}>Taxes</p>
          <p className={styles.price}>{taxes}</p>
        </span>
        <span className={styles.price_span}>
          <p className={styles.service_name}>Service Fee</p>
          <p className={styles.price}>{fee}</p>
        </span>
      </div>
      <div className={styles.split}></div>
      <span className={styles.price_span}>
          <p className={styles.service_name}>Total</p>
          <p className={styles.price}>{total}</p>
        </span>
    </div>
  );
};

export default BookingDetailsCard;
