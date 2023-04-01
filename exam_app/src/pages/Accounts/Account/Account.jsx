import React from "react";
import Department from "../../../Components/Department/Department";
import Button from "../../../Components/UI/Button/Button";
import AccountHistory from "../AccountHistory/AccountHistory";
import styles from "./Account.module.css";
import AccountBCard from "../AccountBCard/AccountBCard";
import AccountFlow from "../AccountFlow/AccountFlow";

const Account = () => {
  return (
    <main className={styles.main}>
      <div className={styles.img_profile_container}>
        <div className={styles.img_container}>
          <div className={styles.btn_container}>
            <Button
              icon="./public/icons/download.svg"
              text="Upload new cover"
            />
          </div>
        </div>
        <div className={styles.prifile_container}>
          <div className={styles.container}>
            <div className={styles.avatar_container}>
              <div className={styles.avatar}>
                <div className={styles.avatar__change}></div>
              </div>
              <div className={styles.nickname_container}>
                <h1 className={styles.user_name}>John Doe.</h1>
                <p className={styles.email}>john.doe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.department_container}>
        <Department />
      </div>
      <div className={styles.FlightStays}></div>
      <div className={styles.routes_container}>
        <AccountHistory />
      </div>
    </main>
  );
};

export default Account;
