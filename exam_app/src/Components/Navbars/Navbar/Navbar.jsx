import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "../../UI/Link/Link";


function Navbar({}) {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
          <Link icon="./public/icons/light_plane.png" text="Find Flight" type="light" to="/flight_search"/>
          <Link icon="./public/icons/light_bed.png" text="Find Stays" type="light" />
          
        </div>

        <div className={styles.logo_con}>
          <img src="./public/img/Logo.svg" alt="" />
        </div>
        <div className={styles.login}>
          <Link text="Login" type="light"/>
          <button className={styles.btn}>Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;
