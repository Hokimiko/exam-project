import React from 'react'
import styles from './Ticket.module.css'

function Ticket({city, img}) {
  return (
    <div className={styles.container1}>
        <div className={styles.img_cont}>
            <img src={img} alt="" />
        </div>
        <div className={styles.texts_cont}>
            <h1 className={styles.city}>{city}</h1>
            <p className={styles.text}>Flights • Hotels • Resorts</p>
        </div>
</div>
  )
}

export default Ticket