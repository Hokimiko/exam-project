import React from "react";
import styles from "./ShowFlight.module.css";
import vector from "./Vector.svg";

function ShowFlight(props) {
  return (
    <div className={styles.card}>
      <div className={styles.img_con}>
        <img className={styles.backg_img} src={props.img} alt="" />
      </div>
      <div className={styles.text_con}>
        <h1>{props.subject}</h1>
        <p>Search hotels & Places Hire to our most popular destinations</p>
        <button>
          <div className={styles.value}>
            <img className={styles.vector} src={vector} alt="" />
            {props.value}
          </div>
        </button>
      </div>
    </div>
  );
}

// <ShowFlight subject="Flight" value="Show Flight" img={Flight} />
// <ShowFlight subject="Hotels" value="Show Hotels" img={Hotels} />     (App.jsx)

export default ShowFlight;
