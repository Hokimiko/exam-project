import React from "react";
import styles from "./FlightDetail.module.css";
import Button from "../../Components/UI/Button/Button";
import SeeButton from "../../Components/UI/SeeButton/SeeButton";
import EmiretsAibus from "../../Components/Card/EmiretsAirbus/EmiretsAibus";
import AirlinesPolicies from "../../Components/Card/EmiratesAirlinesPolicies/AirlinesPolicies";
import FlightTime from "../../Components/Card/FlightTime/FlightTime";

const FlightDetail = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <EmiretsAibus />
        <div className={styles.big_image}></div>
        <div className={styles.BasicEconomyFeatures_container}>
          <div className={styles.BasicEconomyFeatures}>
            <h1 className={styles.h1}>Basic Economy Features</h1>
            <div className={styles.classes_container}>
              <div className={styles.econom}>
                <input className={styles.check} type="checkbox" name="" />
                <p className={styles.classesTexts}>Economy</p>
              </div>
              <div className={styles.firstClass}>
                <input className={styles.check} type="checkbox" name="" />
                <p className={styles.classesTexts}>First Class</p>
              </div>
              <div className={styles.businesClass}>
                <input className={styles.check} type="checkbox" name="" />
                <p className={styles.classesTexts}>Busines Class</p>
              </div>
            </div>
          </div>
          <div className={styles.classes_imgs}>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 186.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 182.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 184.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 183.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 182.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 185.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 142.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 186.png"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.classes_img}
                src="./public/img/Frame 189.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <AirlinesPolicies />
        <FlightTime />
        <FlightTime />
      </div>
    </main>
  );
};

export default FlightDetail;
