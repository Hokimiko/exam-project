import React from "react";
import styles from "./AccountBCard.module.css";
import BankCard from "../../../Components/Card/BankCard/BankCard";
import AddBankCard from "../../../Components/Card/BankCard/BankCard/AddBankCard";

const AccountBCard = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.h1}>Payment methods</h1>
      <div className={styles.container}>
        <BankCard />
        <AddBankCard />
      </div>
    </div>
  );
};

export default AccountBCard;
