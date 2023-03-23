import React from 'react'
import ProfileNav from '../../components/Navbars/ProfileNav/ProfileNav'
import styles from './FlightListing.module.css'

const FlightListing = () => {
  return (
    <div className={styles.container}>
        <ProfileNav/>
    </div>
  )
}

export default FlightListing;