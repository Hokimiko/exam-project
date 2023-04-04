import React, { useEffect, useState } from "react";
import styles from "./ProfileModal.module.css";
import cn from "clsx";
import LinkContainer from "../../UI/LinkContainer/LinkContainer";

const ProfileModal = ({ active, setActive }) => {
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
    <div
      className={active ? cn([styles.active, styles.modal]) : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.header}>
        <img src="./public/icons/user.png" alt="" />
        <div className={styles.name_status}>
          <p className={styles.username}>
            {nameValue} {surnameValue}
          </p>
          <p className={styles.status}>Online</p>
        </div>
      </div>
      <div className={styles.split}></div>
      <div className={styles.options}>
        <LinkContainer to="/account">
          <label className={styles.option}>
            <span className={styles.option_item}>
              <img src="./public/icons/User.svg" alt="" />
              <p className={styles.option_name}>My account</p>
            </span>
            <img src="./public/icons/chevron_forward.svg" alt="" />
          </label>
        </LinkContainer>
        <label className={styles.option}>
          <span className={styles.option_item}>
            <img src="./public/icons/card.svg" alt="" />
            <p className={styles.option_name}>Payments</p>
          </span>
          <img src="./public/icons/chevron_forward.svg" alt="" />
        </label>
        <label className={styles.option}>
          <span className={styles.option_item}>
            <img src="./public/icons/settings.svg" alt="" />
            <p className={styles.option_name}>Settings</p>
          </span>
          <img src="./public/icons/chevron_forward.svg" alt="" />
        </label>
        <div className={styles.split}></div>
        <label className={styles.option}>
          <span className={styles.option_item}>
            <img src="./public/icons/Support.svg" alt="" />
            <p className={styles.option_name}>Settings</p>
          </span>
          <img src="./public/icons/chevron_forward.svg" alt="" />
        </label>
        <label className={styles.option}>
          <span className={styles.option_item}>
            <img src="./public/icons/Logout.svg" alt="" />
            <p className={styles.option_name}>Logout</p>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProfileModal;
