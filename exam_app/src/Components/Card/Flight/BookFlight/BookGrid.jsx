import React from 'react'
import styles from './BookGrid.module.css'

function BookGrid() {
  return (
       <div className={styles.container}> 
    <div className={styles.blok}>
      <div className={styles.blok_con1}>
        <div className={styles.blok_con2}>
          <h1 className={styles.blok_text1}>Backpacking Sri Lanka</h1>
          <div className={styles.blok_con3}>
             <h3 className={styles.blok_text2}>From</h3>
             <h4 className={styles.blok_text3}>$700</h4>
          </div>
        </div>
         <p className={styles.text}>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
      </div>
      <button className={styles.btn} type="button">Book Flight</button>
    </div>
  <div className={styles.wrapper}>
   <div className={styles.box1}><img src="./public/img/Rectangle 3 (5).png" alt=""/></div>
   <div className={styles.box2}><img src="./public/img/Rectangle 3 (6).png" alt=""/></div>
   <div className={styles.box3}><img src="./public/img/Rectangle 3 (7).png" alt=""/></div>
   <div className={styles.box4}><img src="./public/img/Rectangle 3 (8).png" alt=""/></div>
</div>
     </div>
  ) 
}

export default BookGrid