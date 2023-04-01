import React from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import styles from "./Filter.module.css";

const Filter = ({ text, min, max}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{text}</h4>
      <MultiRangeSlider
        min={min}
        max={max}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default Filter;
