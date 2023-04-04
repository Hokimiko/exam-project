import React from 'react'
import styles from './Result.module.css'
function Result() {
  return (
    <div className={styles.container}>
        <div className={styles.imagetext_container}>
            <div className={styles.img_container}></div>
            <div className={styles.text_container}>
                <h4 className={styles.text1}>CVK Park Bosphorus...</h4>
                <h3 className={styles.text2}>Superior room - 1 double bed or 2 twin beds</h3>
                <div className={styles.text3_container}>
                    <h5 className={styles.text3}>Very Good</h5><h4 className={styles.text4}>54 reviews</h4>
                </div>
            </div>
        </div>
        <div className={styles.line}>
        </div>
        <div className={styles.container5}>
            <h3 className={styles.text5}>Your booking is protected by <strong>golobe</strong> </h3>
        </div>
        <div className={styles.line}></div>
        <div className={styles.PriceDetails_container}>
            <h2 className={styles.detileTitle}>Price Detiles</h2>
        </div>
    </div>
  )
}

export default Result