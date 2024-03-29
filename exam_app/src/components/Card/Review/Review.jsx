import React from "react";
import styles from "./Review.module.css";
import star from "./star.svg";
import google_logo from "./google_logo.svg";

function Review(props) {
  return (
    <div className={styles.container}>
      <div className={styles.shadow_container}></div>
      <div className={styles.upper}>
        <h2>
          {props.subject}
        </h2>
        <p className={styles.text}>
          {props.text}
        </p>
        <p className={styles.view_more_con}>
          <a href="#" className={styles.view_more}>
            View more
          </a>
        </p>
        <div className={styles.black_stars_con}>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
      <div className={styles.average}>
        <h5 className={styles.average__name}>{props.name}</h5>
        <p className={styles.studios}>Weave Studios - {props.studios}</p>
        <div className={styles.google_con}>
          <img className={styles.google_logo} src={google_logo} alt="" />
          <p className={styles.google_text}>Google</p>
        </div>
      </div>
      <div className={styles.img_con}>
        <img style={{ width: "100%" }} src={props.img} alt="" />
      </div>
    </div>
  );
}

export default Review;
