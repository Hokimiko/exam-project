import React from 'react'
import styles from './AvailableBook.module.css'
import Button from '../../UI/Button/Button'

function AvailableBook({text, img, price}) {
  return (
    <div className={styles.container}>
        <div className={styles.flex1}>
            <div className={styles.img_container}>
                <img className={styles.img} src={img} alt="" />
            </div>
            <p className={styles.text}>
            {text}
            </p>
            <div className={styles.text_container}></div>
        </div>
        <div className={styles.flex2}>
            <div className={styles.price_container}>
                <h2 className={styles.price}>{price}</h2>
                <p className={styles.text}>/night</p>
            </div>
            <div className={styles.btns_container}>
                <Button text="Book Now"/>
            </div>
        </div>
    </div>
  )
}

export default AvailableBook