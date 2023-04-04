import React from "react";
import styles from "./FlightDetail.module.css";

function FlightDetail({
  img,
  price,
  departure_time,
  departure_time2,
  arrive,
  arrive2,
  city,
  time,
  time2,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={img} alt="" />
      </div>
      <div className={styles.description_container}>
        <div className={styles.grade_container}>
          <div className={styles.grade_text_container}>
            <div className={styles.grade}>
              <p>4.2</p>
            </div>
            <div className={styles.grade_text}>
              <p><b>Very Good</b> 54 reviews</p>
            </div>
          </div>
          <div className={styles.place_container}>
            <p>starting from</p>
            <h2>{price}</h2>
          </div>
        </div>
        <div className={styles.departure_container}>
          <div className={styles.departure1}>
            <div className={styles.departure1__container1}>
              <div className={styles.checkbox}>
                <input type="checkbox" />
              </div>
              <div className={styles.time_container}>
                <div className={styles.time}>
                  <h2>{departure_time}</h2>
                  <h2> - </h2>
                  <h2>{arrive}</h2>
                </div>
                <div className={styles.city}>
                  <p>{city}</p>
                </div>
              </div>
            </div>
            <p>non stop</p>
            <div className={styles.departure1__container2}>
              <div className={styles.time_container}>
                <div className={styles.time}>
                  <h2>{time}</h2>
                </div>
                <div className={styles.city}>
                  <p>EWR-BNA</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.departure2}>
            <div className={styles.departure2__container1}>
              <div className={styles.checkbox}>
                <input type="checkbox" />
              </div>
              <div className={styles.time_container}>
                <div className={styles.time}>
                  <h2>{departure_time2}</h2>
                  <h2>-</h2>
                  <h2>{arrive2}</h2>
                </div>
                <div className={styles.city}>
                  <p>Emirates</p>
                </div>
              </div>
            </div>
            <p>non stop</p>
            <div className={styles.departure2__container2}>
              <div className={styles.time_container}>
                <div className={styles.time}>
                  <h2>{time2}</h2>
                </div>
                <div className={styles.city}>
                  <p>EWR-BNA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button_container}>
          <div className={styles.heart_container}>
            <img src="../public/img/heart.svg" alt="" />
          </div>
          <button className={styles.btn}>View Deals</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <FlightDetail
price="$104"
departure_time="12:00 pm - 01:28 pm"
city="Emirates"
time="2h 28m"
departure_time2="12:00 pm - 01:28 pm"
time2="2h 28m"
/> */
}

export default FlightDetail;
