
import React from 'react'
import styles from './FightDetail.module.css'

const FightDetail = () => {
  return (
      <div className={styles.container}>
        <div className={styles.container2}>
           <div className={styles.con2_blok1}>
            <h2 className={styles.con2_text1}>Emirates A380 Airbus</h2>
           </div>
           <div className={styles.con2_blok2}>
              <div className={styles.con2_blok3}><img src="./src/Components/Icon/Location.svg" alt=""/>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</div>
              <div className={styles.con2_blok4}><button className={styles.btn1} type="button">4.2</button><h4 className={styles.con2_text2} >Very Good 54 reviews</h4></div>
           </div>
        </div>
        <div className={styles.container3}>
           <h1 className={styles.con3_text1}>$240</h1>
           <div className={styles.con3_blok1}> 
           <button type="button" className={styles.con3_btn1}><img src="./src/Components/Icon/Vector (18).svg" alt=""/></button>
           <button type="button" className={styles.con3_btn1}><img src="./src/Components/Icon/Vector (19).svg" alt=""/></button>
           <button type="button" className={styles.con3_btn2}>Book now</button>
           </div>
        </div>
      </div>
    
  )
}

export default FightDetail