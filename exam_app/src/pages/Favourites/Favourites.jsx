import React from "react";
import styles from "./Favourites.module.css";
import CvkCard from "../../Components/Card/CvkCard/CvkCard";

function Favourites() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Favourites</h1>
        <div className={styles.cvk}>
          <CvkCard
            img="./public/img/cvkImg (1).png"
            city="Istanbul"
            price="$ 240"
          />
          <CvkCard
            img="./public/img/cvkImg (2).png"
            city="Istanbul"
            price="$ 240"
          />
          <CvkCard
            img="./public/img/cvkImg (3).png"
            city="Istanbul"
            price="$ 240"
          />
        </div>
      </div>
    </div>
  );
}

export default Favourites;
