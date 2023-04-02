import React from "react";
import styles from "./Tabs.module.css";
import LinkWrapper from "../../../components/UI/LinkWrapper/LinkWrapper";
import Link from "../../../components/UI/Link/Link";

const Tabs = () => {
  return (
    <div className={styles.container}>
      {/* <LinkWrapper> */}
        <div className={styles.tab}>
          <Link text="Account" type="dark" to="/acc_flow"/>
        </div>
      {/* </LinkWrapper> */}
      <div className={styles.split}></div>
      {/* <LinkWrapper> */}
        <div className={styles.tab}>
        <Link text="History" type="dark" to="/acc_history"/>
        </div>
      {/* </LinkWrapper> */}
      <div className={styles.split}></div>
      {/* <LinkWrapper> */}
        <div className={styles.tab}>
        <Link text="Payment methods" type="dark" to="/payment_methods"/>    
        </div>
      {/* </LinkWrapper> */}
    </div>
  );
};

export default Tabs;
