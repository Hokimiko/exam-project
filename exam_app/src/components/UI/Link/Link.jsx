import React from 'react'
import styles from './Link.module.css'

const Link = ({icon, text}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
      <a className={styles.link} href="#">{text}</a>
    </div>
  )
}
export default Link