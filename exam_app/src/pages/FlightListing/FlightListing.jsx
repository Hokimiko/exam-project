import React from "react";
import styles from "./FlightListing.module.css";
import FlightSelection2 from "../../Components/Card/Flight/flightsSelection/FlightSelection2/FlightSelection2";
import FlightDetail from "../../Components/Card/Flight/FligthtDetail/FlightDetail";
import SortType from "../../Components/Card/SortType/SortType";

function FlightListing() {
  return (
    <main className={styles.main}>
      <div className={styles.form_container}>
        <FlightSelection2 />
      </div>
      <section className={styles.section}>
        <aside className={styles.aside}></aside>
        <div className={styles.flightDetails_container}>
          <div className={styles.SortType}>
            <SortType />
          </div>
          <div className={styles.recommended_texts_container}>
            <div className={styles.texts}>
              <p className={styles.text1}>Showing 4 of</p>
              <p className={styles.red_text}>257 places</p>
            </div>
            <div className={styles.selects}>
              <p className={styles.text2}>Sort by</p>
              <select className={styles.select} name="" id="">
                <option className={styles.options} value="">
                  Recommended
                </option>
              </select>
            </div>
          </div>
          <div className={styles.flightDetail_container}>
            <FlightDetail
              img="../public/img/image 40.png"
              price="$104"
              departure_time="12:00 pm - 01:28 pm"
              city="Emirates"
              time="2h 28m"
              departure_time2="12:00 pm - 01:28 pm"
              time2="2h 28m"
            />
          </div>
          <div className={styles.flightDetail_container}>
            <FlightDetail
              img="../public/img/image 41 (1).png"
              price="$104"
              departure_time="12:00 pm - 01:28 pm"
              city="Emirates"
              time="2h 28m"
              departure_time2="12:00 pm - 01:28 pm"
              time2="2h 28m"
            />
          </div>
          <div className={styles.flightDetail_container}>
            <FlightDetail
              img="../public/img/image 43 (1).png"
              price="$104"
              departure_time="12:00 pm - 01:28 pm"
              city="Emirates"
              time="2h 28m"
              departure_time2="12:00 pm - 01:28 pm"
              time2="2h 28m"
            />
          </div>
          <div className={styles.flightDetail_container}>
            <FlightDetail
              img="../public/img/image 45 (1).png"
              price="$104"
              departure_time="12:00 pm - 01:28 pm"
              city="Emirates"
              time="2h 28m"
              departure_time2="12:00 pm - 01:28 pm"
              time2="2h 28m"
            />
          </div>
          <button className={styles.btn}>Show more results</button>
        </div>
      </section>
    </main>
  );
}

export default FlightListing;
