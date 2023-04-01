import React from 'react'
import styles from './SeeButton.module.css'

const SeeButton = ({text}) => {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default SeeButton;
