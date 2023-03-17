import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ logo }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_netWorx}>
          <div className={styles.logo_container}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.netWorx_container}>
            <img src="./src/Components/Icon/Vector (13).svg" alt="" />
            <img
              className={styles.icon}
              src="./src/Components/Icon/Vector (14).svg"
              alt=""
            />
            <img
              className={styles.icon}
              src="./src/Components/Icon/Vector (15).svg"
              alt=""
            />
            <img
              className={styles.icon}
              src="./src/Components/Icon/Vector (16).svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.links_container}>
          <h5>Our Destinations</h5>
          <p>
            <a href="#">Canada</a>
          </p>
          <p>
            <a href="#">Alaska</a>
          </p>
          <p>
            <a href="#">France</a>
          </p>
          <p>
            <a href="#">Iceland</a>
          </p>
        </div>
        <div className={styles.links_container}>
          <h5>Our Destinations</h5>
          <p>
            <a href="#">Northern Lights</a>
          </p>
          <p>
            <a href="#">Cruising & sailing</a>
          </p>
          <p>
            <a href="#">Multi-activities</a>
          </p>
          <p>
            <a href="#">Kayaing</a>
          </p>
        </div>
        <div className={styles.links_container}>
          <h5>Our Destinations</h5>
          <p>
            <a href="#">Bali Travel Guide</a>
          </p>
          <p>
            <a href="#">Sri Lanks Travel Guide</a>
          </p>
          <p>
            <a href="#">Peru Travel Guide</a>
          </p>
          <p>
            <a href="#">Bali Travel Guide</a>
          </p>
        </div>
        <div className={styles.links_container}>
          <h5>Our Destinations</h5>
          <p>
            <a href="#">Our Story</a>
          </p>
          <p>
            <a href="#">Work with us</a>
          </p>
        </div>
        <div className={styles.links_container}>
          <h5>Our Destinations</h5>
          <p>
            <a href="#">Our Story</a>
          </p>
          <p>
            <a href="#">Work with us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
