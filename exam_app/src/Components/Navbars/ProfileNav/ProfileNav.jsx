import React from 'react'
import styles from './ProfileNav.module.css'

const ProfileNav = () => {
  return (
    <div className={style.container}>
        <div className={style.links}>
            <Link icon="./public/icons/plane.png" text="Find Flight" type="dark" to="/flight_search"/>
            <Link icon="./public/icons/bed.png" text="Find Stays" type="dark" />
        </div>
        <div className={style.logo_container}>
            <img className={style.logo} src="./public/img/LogoDark.svg" alt="" />
        </div>
        <div className={style.profile}>
            
        </div>
    </div>
  )
}

export default ProfileNav;