import React from "react";
import SeeButton from "../../../Components/UI/SeeButton/SeeButton";
import styles from "./AccountFlow.module.css";

const AccountFlow = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Account</h2>
      <div className={styles.container}>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Name</h4>
            <h2 className={styles.userName}>John Doe</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Email</h4>
            <h2 className={styles.userName}>john.doe@gmail.com</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Password</h4>
            <h2 className={styles.userName}>***********</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Phone number</h4>
            <h2 className={styles.userName}>+996 953 756 253</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Address</h4>
            <h2 className={styles.userName}>
              Address St 32 main downtown, Los Angeles, California, USA
            </h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Date of birth</h4>
            <h2 className={styles.userName}>01-01-1992</h2>
          </div>
          <SeeButton text="Change" />
        </div>
      </div>
    </div>
  );
};

export default AccountFlow;
