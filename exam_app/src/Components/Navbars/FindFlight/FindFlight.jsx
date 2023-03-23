import React from 'react'
import Link from '../../UI/Link/Link'
import SignUpButton from '../../UI/SignUpButton/SignUpButton'
import style from './FindFlight.module.css'

const FindFlight = () => {
  return (
    <div className={style.container}>
        <div className={style.links}>
            <Link icon="./public/icons/plane.png" text="Find Flight" type="dark" to="/flight_search"/>
            <Link icon="./public/icons/bed.png" text="Find Stays" type="dark" />
        </div>
        <div className={style.logo_container}>
            <img className={style.logo} src="./public/img/LogoDark.svg" alt="" />
        </div>
        <div className={style.login}>
            <Link text="Login" type="dark"/>
            <SignUpButton text="Sign Up" type="dark" to="/sign_up"/>
        </div>
    </div>
  )
}

export default FindFlight