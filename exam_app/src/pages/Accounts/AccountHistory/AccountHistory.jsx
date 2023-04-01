import React from "react";
import HistoryCard from "../../../Components/Card/HistoryCard/HistoryCard";
import HistoryStays from "../../../Components/Card/HistoryCard/HistoryStays/HistoryStays";
import FlightStays from "../../../Components/Card/FlightStays/FlightStays";
import styles from "./AccountHistory.module.css";

const AccountHistory = () => {
  return (
    <div className={styles.container}>
      <FlightStays />
      <HistoryStays />
    </div>
  );
};

{
  /* <FlightStays />
<HistoryCard /> */
}

export default AccountHistory;
