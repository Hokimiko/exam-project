import React from 'react'
import styles from './Rate.module.css'

const Rate = ({text}) => {
  return (
    <div className={styles.block}>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Rate