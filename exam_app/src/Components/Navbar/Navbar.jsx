import React from "react";
import Link from "../UI/Link/Link";
import styles from "./Navbar.module.css";
import logotype from "./Logo.svg";

function Navbar({ icon1, icon2, logo, login, signUp }) {
  return (
    <div className={styles.header}>
      <nav>
        <Link icon={icon1} text="Find Flight"/>
        <Link icon={icon2} text="Find Stays" />
      </nav>
      <div className={styles.logo_con}>
        <img src={logotype} alt="" />
      </div>
      <div className={styles.buttons_con}>
        <a href="" className={styles.login}>
          Login
        </a>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
