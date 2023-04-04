import React, { useEffect, useState } from "react";
import styles from "./BussinessClass.module.css";

const BussinessClass = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");

  useEffect(() => {
    const nameValueFromLocalStorage = localStorage.getItem("firstName");
    const surnameValueFromLocalStorage = localStorage.getItem("lastName");

    if (nameValueFromLocalStorage) {
      setNameValue(nameValueFromLocalStorage);
    }
    if (surnameValueFromLocalStorage) {
      setSurnameValue(surnameValueFromLocalStorage);
    }
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.flight_range}>
        <div className={styles.flight_time}>
          <h1 className={styles.time}>12:00 pm</h1>
          <p className={styles.place}>Newark(EWR)</p>
        </div>
        <img src="./public/icons/flight_range.svg" alt="" />
        <div className={styles.flight_time}>
          <h1 className={styles.time}>12:00 pm</h1>
          <p className={styles.place}>Newark(EWR)</p>
        </div>
      </section>
      <section className={styles.ticket}>
        <div className={styles.ticket_header}>
          <div className={styles.profile}>
            <div className={styles.user_profile}>
              <img src="./public/icons/user.png" alt="" />
              <div className={styles.user}>
                <h2 className={styles.username}>{nameValue} {surnameValue}</h2>
                <p className={styles.pass}>Boarding Pass N’123</p>
              </div>
            </div>
            <p className={styles.class}>Busniess Class</p>
          </div>
        </div>
        <div className={styles.ticket_info}>
          <div className={styles.info_span}>
            <div className={styles.info_container}>
              <img src="./public/icons/calendar.svg" alt="" />
              <div className={styles.info}>
                <h4 className={styles.title}>Date</h4>
                <p className={styles.subtitle}>Newark(EWR)</p>
              </div>
            </div>
            <div className={styles.info_container}>
              <img src="./public/icons/clock.svg" alt="" />
              <div className={styles.info}>
                <h4 className={styles.title}>Flight time</h4>
                <p className={styles.subtitle}>12:00</p>
              </div>
            </div>
            <div className={styles.info_container}>
              <img src="./public/icons/gates.svg" alt="" />
              <div className={styles.info}>
                <h4 className={styles.title}>Gate</h4>
                <p className={styles.subtitle}>A12</p>
              </div>
            </div>
            <div className={styles.info_container}>
              <img src="./public/icons/seat_number.svg" alt="" />
              <div className={styles.info}>
                <h4 className={styles.title}>Seat</h4>
                <p className={styles.subtitle}>128</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.code_span}>
          <div className={styles.ticket_id}>
            <h1 className={styles.id_title}>EK</h1>
            <p className={styles.id}>ABC12345</p>
          </div>
          <img src="./public/icons/shtrih_code.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default BussinessClass;
