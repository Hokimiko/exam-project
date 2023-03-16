import React from 'react'
import styles from './Link.module.css'

const Link = ({icon, text, type}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
      <a className={linkType(type)} href="#">{text}</a>
    </div>
  )
}
export default Link