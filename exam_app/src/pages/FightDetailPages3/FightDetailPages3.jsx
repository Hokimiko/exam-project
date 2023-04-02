import React from 'react'
import styles from './FightDetailPages3.module.css'

const FightDetailPages3 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container2}>
            <h2 className={styles.text1}>Return Wed, Dec 8</h2>
            <h2 className={styles.text2}>2h 28m</h2>   
        </div>
        <div className={styles.container3}>
            <div className={styles.container4}>
                <div className={styles.con4_con1}>
                <img src="./public/img/kisspng-dubai-airbus-a380-emirates-airline-logo-5adaedbb89d2d6 1.png" alt=""/>
                <div className={styles.con4_con2}>
                    <h3 className={styles.con4_tex1}>Emirates</h3>
                    <h3 className={styles.con4_tex2}>Airbus A320</h3>
                </div>
                </div>
                <div className={styles.container5}>
                <img src="./public/icons/plane.png" alt=""/>
                <div className={styles.lin1}></div>
                <img src="./public/icons/Wifi.png" alt=""/>
                <div className={styles.lin1}></div>
                <img src="./public/icons/ion_stopwatch.png" alt=""/>
                <div className={styles.lin1}></div>
                <img src="./public/icons/ion_fast-food.png" alt=""/>
                <div className={styles.lin1}></div>
                <img src="./public/icons/Vector (17).png" alt=""/>
                </div>
            </div>
            <div className={styles.container6}>
                <div className={styles.con6_con1}>
                    <div className={styles.con6_con1_con1}><h5 className={styles.con6_text1}>12:00 pm</h5></div>
                    <div className={styles.con6_con1_con2}><h5 className={styles.con6_text2}>Newark(EWR)</h5></div>
                </div>
                <div className={styles.con6_con2}>
                    <div className={styles.con6_con2_lin}></div>
                    <img className={styles.con6_con2_img} src="./public/icons/Vector (18).png" alt=""/>
                    <div className={styles.con6_con2_lin}></div>
                    </div>
                <div className={styles.con6_con1}>
                    <div className={styles.con6_con1_con1}><h5 className={styles.con6_text1}>12:00 pm</h5></div>
                    <div className={styles.con6_con1_con2}><h5 className={styles.con6_text2}>Newark(EWR)</h5></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FightDetailPages3