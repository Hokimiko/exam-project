import React from 'react'
import { useState, useEffect } from 'react';
import Link from '../../UI/Link/Link';
import SignUpButton from '../../UI/SignUpButton/SignUpButton';
import styles from './ProfileNav.module.css'

const ProfileNav = () => {

  const [storedValue, setStoredValue] = useState('');

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('firstName');
    if (valueFromLocalStorage) {
      setStoredValue(valueFromLocalStorage);
    }
  }, []);

  return (
    <div className={styles.container}>
       <div className={styles.links}>
          <Link icon="./public/icons/plane.png" text="Find Flight" type="dark" to="/flight_search"/>
          <Link icon="./public/icons/bed.png" text="Find Stays" type="dark" />
          
        </div>

        <div className={styles.logo_con}>
          <img src="./public/img/LogoDark.svg" alt="" />
        </div>
        <div className={styles.login}>
          <p className={styles.name}>{storedValue}</p>
        </div>
    </div>
  )
}

export default ProfileNav;