import React from "react";
import styles from "./AddCardModal.module.css";
import CreateAccButton from "../../UI/CreateAccButton/CreateAccButton";

const AddCardModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Add a new Card</h1>
        <img src="./public/icons/close_btn.svg" alt="" />
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          id={styles.inp1}
          placeholder="Card number"
        />
        <input
          className={styles.input}
          type="text"
          id={styles.inp2}
          placeholder="Exp date"
        />
        <input
          className={styles.input}
          type="text"
          id={styles.inp3}
          placeholder="CVC"
        />
        <input
          className={styles.input}
          type="text"
          id={styles.inp4}
          placeholder="Name on card"
        />
        <input
          className={styles.input}
          type="text"
          id={styles.inp5}
          placeholder="Country or region"
        />
      </div>
      <label className={styles.save_info}>
        <input type="checkbox" />
        <p>Securely save my information for 1-click checkout</p>
      </label>
      <CreateAccButton text="Add card" to="/flight_booking_3"/>
      <p className={styles.confirm}>
        By confirming your subscription, you allow The Outdoor Inn Crowd Limited
        to charge <br /> your card for this payment and future payments in accordance
        with their terms. You can <br /> always cancel your subscription.
      </p>
    </div>
  );
};

export default AddCardModal;
