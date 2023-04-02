import React, { useEffect, useState } from "react";

import styles from "./AccountFlow.module.css";
import SeeButton from "../../../components/UI/SeeButton/SeeButton";

const AccountFlow = () => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  useEffect(() => {
    const nameValueFromLocalStorage = localStorage.getItem("firstName");
    const surnameValueFromLocalStorage = localStorage.getItem("lastName");
    const emailValueFromLocalStorage = localStorage.getItem("emailValue");
    const passwordValueFromLocalStorage = localStorage.getItem("passwordValue");
    const phoneValueFromLocalStorage = localStorage.getItem("phoneValue");

    if (nameValueFromLocalStorage) {
      setNameValue(nameValueFromLocalStorage);
    }
    if (surnameValueFromLocalStorage) {
      setSurnameValue(surnameValueFromLocalStorage);
    }
    if (emailValueFromLocalStorage) {
      setEmailValue(emailValueFromLocalStorage);
    }
    if (passwordValueFromLocalStorage) {
      setPasswordValue(passwordValueFromLocalStorage);
    }
    if (phoneValueFromLocalStorage) {
      setPhoneValue(phoneValueFromLocalStorage);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Account</h2>
      <div className={styles.container}>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Name</h4>
            <h2 className={styles.userName}>
              {nameValue} {surnameValue}
            </h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Email</h4>
            <h2 className={styles.userName}>{emailValue}</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Password</h4>
            <h2 className={styles.userName}>{passwordValue}</h2>
          </div>
          <SeeButton text="Change" />
        </div>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <h4 className={styles.nameText}>Phone number</h4>
            <h2 className={styles.userName}>{phoneValue}</h2>
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
