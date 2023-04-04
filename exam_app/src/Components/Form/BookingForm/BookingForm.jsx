import React from "react";
import styles from "./BookingForm.module.css";
import CreateAccButton from "../../UI/CreateAccButton/CreateAccButton";

const BookingForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Login or Sign up to book</div>
      <input className={styles.input} type="text" placeholder="Phone Number" />
      <div className={styles.privacy_policy}>
        We’ll call or text you to confirm your number. Standard message and data
        rates apply. Privacy Policy
      </div>
      <div className={styles.create_acc}>
        <div className={styles.button}>
          <CreateAccButton text="Continue" to="/flight_booking_2"/>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.or_signup}>
        <p className={styles.or_signup_text}>Or</p>
      </div>
      <div className={styles.media_container}>
        <div className={styles.media} id="media1">
          <img src="./public/icons/facebook.png" alt="" />
        </div>
        <div className={styles.media} id="media2">
          <img src="./public/icons/google.png" alt="" />
        </div>
        <div className={styles.media} id="media3">
          <img src="./public/icons/apple.png" alt="" />
        </div>
        <div className={styles.media} id="media4">
          <label className={styles.email_label}>
          <img src="./public/icons/mail.svg" alt="" />
          <p className={styles.email_text}>Continue with email</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
