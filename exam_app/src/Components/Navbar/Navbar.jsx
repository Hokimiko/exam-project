import React from "react";
import { useState } from "react";
import Link from "../UI/Link/Link";
import styles from "./Navbar.module.css";
import logoLight from "./Logo.svg";
import logoDark from "./LogoDark.svg";

function Navbar({ icon1, icon2, props }) {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link icon={icon1} text="Find Flight" />
        <Link icon={icon2} text="Find Stays" />
      </nav>
      <div className={styles.logo_con}>
        <img src={logoLight} alt="" />
      </div>
      <div className={styles.buttons_container}>
        <a href="" className={styles.login}>
          Login
        </a>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
