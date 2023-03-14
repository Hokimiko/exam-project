import React from "react";
import Button from "../../../UI/Button/Button";
import Link from "../../../UI/Link/Link";
import styles from './FlightsSelection.module.css';

const FlightsSelection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.tabs}>
            <Link icon="./public/icons/plane.png" text="Flights"/>
            <div className={styles.break}></div>
            <Link icon="./public/icons/bed.png" text="Stays"/>
        </div>
        <div className={styles.inputs}>
            <input className={styles.input} type="text" value="Lahore - Karachi" readOnly/>
            <select className={styles.select} name="" id="">
                <option value="">Return</option>
            </select>
            <input className={styles.input} type="date" />
            <input className={styles.input} type="text" value="1 Passenger, Economy"/>
        </div>
        <div className={styles.buttons}>
            <Link text="+ Add Promo Code"/>
            <Button icon="./public/icons/telegram.png" text="Show flights"/>
        </div>
      </div>
    </div>
  );
};



export default FlightsSelection;
