import React from "react";
import Button from "../../../Components/UI/Button/Button";
import styles from "./AccountFlow.module.css";

const AccountFlow = () => {
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
        <div className={styles.prifile_container}></div>
      </div>
    </main>
  );
};

export default AccountFlow;
