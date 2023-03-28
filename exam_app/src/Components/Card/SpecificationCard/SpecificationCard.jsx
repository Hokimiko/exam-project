import React from "react";
import styles from "./SpecificationCard.module.css";

function SpecificationCard({ icon, subject, title, text, text2, click }) {
  return (
    <main>
      {/* <div className={style}>
        <div className={styles.subject_container}>
          <h2 className={styles.subject}>{subject}</h2>
        </div>
        <div className={styles.title_text2}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text2}</p>
        </div>
      </div> */}
      <div className={styles.container}>
        <div className={styles.subject_container}>
          <img src={icon} />
        </div>
        <div className={styles.text_container}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </main>
  );
}

const style = "container2_block";

// function Click() {
//   return (style = "container2_block");
// }

export default SpecificationCard;
