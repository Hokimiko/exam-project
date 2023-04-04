import React from 'react'
import styles from './Amenities.module.css'
import Button from '../../UI/Button/Button'

function Amenities({icons}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Amenities</h1>
        <div className={styles.texts_container}>
            <div className={styles.container1}>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (11).svg" alt="" /> Outdoor pool</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (11).svg" alt="" /> Indoor pool</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (12).svg" alt="" /> Spa and wellness center</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (13).svg" alt="" /> Restaurant</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (14).svg" alt="" /> Room service</p>
            </div>
            <div className={styles.container2}>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (15).svg" alt="" /> Fitness center</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (16).svg" alt="" /> Bar/Lounge</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (19).svg" alt="" /> Free Wi-Fi</p>
                <p className={styles.texts}> <img  className={styles.icons} src="./public/icons/Vector (20).svg" alt="" /> Tea/coffee machine</p>
            </div>
        </div>
        <div className={styles.line}></div>
    </div>
  )
}

export default Amenities