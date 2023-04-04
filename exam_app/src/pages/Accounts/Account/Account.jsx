import React, { useState } from "react";
import AccountHistory from "../AccountHistory/AccountHistory";
import styles from "./Account.module.css";
import AccountBCard from "../AccountBCard/AccountBCard";
import AccountFlow from "../AccountFlow/AccountFlow";
import { Route, Routes } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import Tabs from "../Tabs/Tabs";
import Layout from "../../../components/UI/Layout/Layout";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

const Account = () => {



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
        <div className={styles.prifile_container}>
          <div className={styles.container}>
            <div className={styles.avatar_container}>
              <div className={styles.avatar}>
                <div className={styles.avatar__change}></div>
              </div>
              <div className={styles.nickname_container}>
                <h1 className={styles.user_name}>John Doe.</h1>
                <p className={styles.email}>john.doe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        <Tabs />
      </div>


      <div className={styles.routes}>
        {/* <Routes>
          <Route path="/acc_flow" element={<AccountHistory />} />
          <Route path="/acc_history" element={<AccountHistory />} />
          <Route path="/payment_methods" element={<AccountBCard />} />
        </Routes> */}
        {/* <AccountHistory/> */}
        <AccountBCard/>
      </div>


    </main>
  );
};

export default Account;
