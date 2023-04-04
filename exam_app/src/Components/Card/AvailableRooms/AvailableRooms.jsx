import React from 'react'
import styles from './AvailableRooms.module.css'
import AvailableBook from '../AvailableBook/AvailableBook'

function AvailableRooms() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.title}>
            Available Rooms
            </h1>
            <div className={styles.BookNows}>
                <AvailableBook img="./public/img/Rectangle 18.png" price="$ 240" text="Superior room - 1 double bed or 2 twin beds"/>
                <div className={styles.line}></div>
                <AvailableBook img="./public/img/Rectangle 19.png" price="$ 240" text="Superior room - 1 double bed or 2 twin beds"/>
                <div className={styles.line}></div>
                <AvailableBook img="./public/img/Rectangle 20.png" price="$ 240" text="Superior room - 1 double bed or 2 twin beds"/>
                <div className={styles.line}></div>
                <AvailableBook img="./public/img/Rectangle 19.png" price="$ 240" text="Superior room - 1 double bed or 2 twin beds"/>
            </div>
        </div>
    </div>
  )
}

export default AvailableRooms