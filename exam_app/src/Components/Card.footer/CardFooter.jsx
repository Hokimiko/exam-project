import React from "react";
import styles from "./CardFooter.module.css";

const CardFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.text1}>
          Subscribe <br></br> Newsletter
        </h1>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h3 className={styles.text2}>The Travel</h3>
            <h4 className={styles.text3}>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </h4>
          </div>
          <div className={styles.container4}>
            <input
              className={styles.input1}
              type="text"
              placeholder="Your email address"
              name="login"
            />{" "}
            <button className={styles.button} type="button">
              Subscribe
            </button>
          </div>

          <div className={styles.img}>
            <img
              src="./src/Components/Icon/emojione-v1_open-mailbox-with-lowered-flag.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
