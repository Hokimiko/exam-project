import React from "react";
import styles from "./FlightTime.module.css";

function FlightTime() {
  return (
    <div className={styles.container}>
      <div className={styles.data_time}>
        <div className={styles.data_container}>
          <h2 className={styles.dataText}>Return Wed, Dec 8</h2>
        </div>
        <div className={styles.time_container}>
          <p className={styles.timeText}>2h 28m</p>
        </div>
      </div>
      <div className={styles.emirets_icons}>
        <div className={styles.emirets_container}>
          <div className={styles.img_container}>
            <img
              className={styles.img}
              src="./public/img/image 40.png"
              alt=""
            />
          </div>
          <div className={styles.texts}>
            <h1 className={styles.emiretsTitle}>Emirates</h1>
            <p className={styles.emiretsText}>Airbus A320</p>
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src="./public/icons/plane.png" alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.icon}>
            <img src="./public/icons/wifi.svg" alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.icon}>
            <img src="./public/icons/blackTime.svg" alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.icon}>
            <img src="./public/icons/fastFood.svg" alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.icon}>
            <img src="./public/icons/blackSeat.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.returnFlight}>
        <div className={styles.departure_container}>
          <div>
            <h2 className={styles.departureTime}>12:00 pm</h2>
          </div>
          <div>
            <p className={styles.p}>Newark(EWR)</p>
          </div>
        </div>
        <div className={styles.plane_container}>
          <img src="./public/icons/Line 5.svg" alt="" />
          <img
            className={styles.plane_icon}
            src="./public/icons/bigPlane.svg"
            alt=""
          />
          <img src="./public/icons/Line 6.svg" alt="" />
        </div>
        <div className={styles.landing_container}>
          <div>
            <h2 className={styles.departureTime}>12:00 pm</h2>
          </div>
          <div>
            <p className={styles.p}>Newark(EWR)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightTime;
