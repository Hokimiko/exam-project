import React from "react";
import styles from "./Department.module.css";

const Department = () => {
  return (
    <div className={styles.container}>
      <div className={styles.account_container}>
        <h3 className={styles.texts} to="/accFlow">
          Account
        </h3>
      </div>
      <div className={styles.history_ontainer}>
        <h3 className={styles.texts} to="/history">
          History
        </h3>
      </div>
      <div className={styles.paymentMethods_container}>
        <h3 className={styles.texts}>Payment methods</h3>
      </div>
    </div>
  );
};

export default Department;
