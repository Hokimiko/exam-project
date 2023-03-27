import React from 'react'
import styles from './FightDetailPages.module.css'

const FightDetailPages = () => {
  return (
      <div className={styles.container}>
        <div className={styles.container1}>
            <h1 className={styles.text1}>Basic Economy Features</h1>
            <div className={styles.container2}>
                <div className={styles.container3}>
                <label  className={styles.con_checkbox1}>
                   <input checked={styles.checked} type="checkbox"/>
                   <div  className={styles.con_checkmark1}></div>
                </label>
                <h1 className={styles.con3_text1}>Economy</h1>
                </div> 

                <div className={styles.container3}>
                <label  className={styles.con_checkbox1}>
                   <input checked={styles.checked} type="checkbox"/>
                   <div  className={styles.con_checkmark1}></div>
                </label>
                <h1 className={styles.con3_text1}>First Class</h1>
                </div> 

                <div className={styles.container3}>
                <label  className={styles.con_checkbox1}>
                   <input checked={styles.checked} type="checkbox"/>
                   <div  className={styles.con_checkmark1}></div>
                </label>
                <h1 className={styles.con3_text1}>Busines Class</h1>
                </div> 
            </div>
        </div> 
        <div className={styles.container4}>
            <div className={styles.con4_container}><img src="./public/img/Frame 186.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 142.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 189.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 185.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 189.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 185.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 185.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 183.png" alt=""/></div>
            <div className={styles.con4_container}><img src="./public/img/Frame 184.png" alt=""/></div>
        </div>
      </div>
    
  )
}

export default FightDetailPages