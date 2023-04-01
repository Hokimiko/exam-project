import React from 'react'
import styles from './FightDetailPages2.module.css'

const FightDetailPages2 = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text1}>Emirates Airlines Policies</h1>
        <div className={styles.container2}>
          <div className={styles.container3}>
          <img src="./public/icons/ion_stopwatch.png" alt=""/> <h4 className={styles.text2}>Pre-flight cleaning, installation of cabin HEPA filters.</h4>
          </div>
          <div className={styles.container4}>
          <img src="./public/icons/ion_stopwatch.png" alt=""/> <h4 className={styles.text2}>Pre-flight health screening questions.</h4>
          </div>
        </div>
    </div>
  )
}

export default FightDetailPages2