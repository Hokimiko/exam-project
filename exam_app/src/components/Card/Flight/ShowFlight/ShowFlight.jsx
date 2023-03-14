import React from "react";
import Button from "../../../UI/Button/Button";
import styles from "./ShowFlight.module.css";


function ShowFlight(props) {
  return (
    <div className={styles.card}>
      <div className={styles.img_con}>
        <img className={styles.backg_img} src={props.img} alt="" />
      </div>
      <div className={styles.text_con}>
        <h1>{props.subject}</h1>
        <p className={styles.text}>
          Search hotels & Places Hire to our most popular destinations
        </p>
        <div className={styles.btn_con}>
          <Button icon={vector} text={props.text} />
        </div>
      </div>
    </div>
  );
}

{
  /* <ShowFlight
className="card1"
subject="Flight"
text="Show Flight"
img={Flight}
/>                                 App.jsx
<ShowFlight
className="card2"
subject="Hotels"
text="Show Hotels"
img={Hotels}
/> */
}

export default ShowFlight;
