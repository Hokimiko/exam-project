import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={styles.container}>
        <header>
            <div className={styles.header__section}>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
            </div>
        </header>
    </div>
  )
}

export default LandingPage