import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CreateAccButton.module.css'

const CreateAccButton = ({text, to, click}) => {
  return (
    <NavLink to={to}><div onClick={click} id={styles.createacc_btn} className={styles.btn}>{text}</div></NavLink>
  )
}

export default CreateAccButton;