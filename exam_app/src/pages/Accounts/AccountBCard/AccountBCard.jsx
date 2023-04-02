import React, { useState } from "react";
import styles from "./AccountBCard.module.css";
import BankCard from "../../../Components/Card/BankCard/BankCard";
import AddBankCard from "../../../components/Card/BankCard/AddCard/AddBankCard";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import AddCardModal from "../../../components/Modals/AddCardModal/AddCardModal";

const AccountBCard = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.h1}>Payment methods</h1>
      <div className={styles.container}>
        <BankCard />
        <AddBankCard click={() => setModalActive(true)}/>
      </div>
      <Backdrop active={modalActive} setActive={setModalActive}><AddCardModal/></Backdrop>
    </div>  
  );
};

export default AccountBCard;
