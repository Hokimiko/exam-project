import React from 'react'
import styles from './SeeButton.module.css'

const SeeButton = ({text, icon}) => {
  return (
    <button className={styles.btn}><img src={icon} alt="" />{text}</button>
  )
}

export default SeeButton;
