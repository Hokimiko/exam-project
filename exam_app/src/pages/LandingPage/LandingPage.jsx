import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <section className={styles.header__section}>
          <div className={styles.backdrop}></div>
          <img
            className={styles.header__img}
            src="/public/img/1st_header.jpg"
            alt=""
          />
          <div className={styles.navbar_container}>
            <div className={styles.navbar}>
              <Navbar />
            </div>
            <div className={styles.text_container}>
              <h3 className={styles.subtitle}>Helping Others</h3>
              <h1 className={styles.title}>Live & Travel</h1>
              <p className={styles.text}>Special offers to suit your plan</p>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default LandingPage;
