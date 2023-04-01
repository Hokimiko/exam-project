import React from 'react'
import styles from './Checkbox.module.css'

const Checkbox = ({text}) => {
  return (
    <span className={styles.wrapper}>
        <input type="checkbox" id={styles.check}/>
        <p className={styles.text}>{text}</p>
    </span>
  )
}

export default Checkbox