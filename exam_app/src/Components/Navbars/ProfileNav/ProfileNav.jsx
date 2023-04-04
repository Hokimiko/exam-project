import React from "react";
import { useState, useEffect } from "react";
import Link from "../../UI/Link/Link";
import SignUpButton from "../../UI/SignUpButton/SignUpButton";
import styles from "./ProfileNav.module.css";
import ProfileName from "../../UI/ProfileName/ProfileName";
import ProfileModal from "../../Modals/ProfileModal/ProfileModal";

const ProfileNav = () => {
  const [storedValue, setStoredValue] = useState("");
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem("firstName");
    if (valueFromLocalStorage) {
      setStoredValue(valueFromLocalStorage);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link
          icon="./public/icons/plane.png"
          text="Find Flight"
          type="dark"
          to="/flight_search"
        />
        <Link icon="./public/icons/bed.png" text="Find Stays" type="dark" />
      </div>

      <div className={styles.logo_con}>
        <img src="./public/img/LogoDark.svg" alt="" />
      </div>
      <div className={styles.profile}>
        <div className={styles.favourites}>
          <img src="./public/icons/heart.svg" alt="" />
          <Link text="Favourites" type="dark_semiblod" />
        </div>
        <div className={styles.split}></div>
        <div className={styles.user}>
          <div className={styles.img} onClick={() => setModalActive(true)}>
            <img src="./public/icons/user.png" alt="" />
          </div>
          <ProfileName to="/account">{storedValue}</ProfileName>
          <div className={styles.modal}>
            <ProfileModal active={modalActive} setActive={setModalActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
