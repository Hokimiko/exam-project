import React from "react";
import styles from "./HotelPhotos.module.css";

function HotelPhotos() {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <img src="./public/img/hotelPhoto (1).png" alt="" />
      </div>
      <div className={styles.block2}>
        <img src="./public/img/hotelPhoto (2).png" alt="" />
      </div>
      <div className={styles.block3}>
        <img src="./public/img/hotelPhoto (4).png" alt="" />
      </div>
      <div className={styles.block4}>
        <img src="./public/img/hotelPhoto (3).png" alt="" />
      </div>
      <div className={styles.block5}>
        <img src="./public/img/hotelPhoto (5).png" alt="" />
      </div>
    </div>
  );
}

export default HotelPhotos;
