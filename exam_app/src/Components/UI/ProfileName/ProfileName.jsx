import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ProfileName.module.css'

const ProfileName = ({to, children}) => {
  return (
    <NavLink to={to}>
        <h1 className={styles.text}>{children}</h1>
    </NavLink>
  )
}

export default ProfileName