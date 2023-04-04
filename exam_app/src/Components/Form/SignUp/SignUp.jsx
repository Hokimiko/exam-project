import React from "react";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import CreateAccButton from "../../UI/CreateAccButton/CreateAccButton";
import styles from "./SignUp.module.css";

const SignUp = () => {  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handlePasswordValue = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleEmailValuee = (event) => {
    setEmailValue(event.target.value);
  };
  const handlePhoneValue= (event) => {
    setPhoneValue(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('passwordValue', passwordValue);
    localStorage.setItem('emailValue', emailValue);
    localStorage.setItem('phoneValue', phoneValue);
  };


  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src="./public/img/signup_image.png" alt="" />
      </div>
      <div className={styles.form_container}>
        <img src="./public/img/LogoDark.svg" alt="" />
        <div className={styles.title_container}>
          <h1 className={styles.title}>Sign up</h1>
          <p className={styles.subtitle}>
            Let’s get you all st up so you can access your personal account.
          </p>
        </div>
        <div className={styles.inputs_container}>
          <input
            className={styles.input}
            placeholder="First name"
            type="text"
            id={styles.firstName}
            value={firstName}
            onChange={handleFirstName}
          />
          <input
            className={styles.input}
            placeholder="Last name"
            type="text"
            id={styles.lastName}
            value={lastName}
            onChange={handleLastName}
          />
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            id={styles.email}
            value={emailValue}
            onChange={handleEmailValuee}
          />
          <input
            className={styles.input}
            placeholder="Phone number"
            type="text"
            id={styles.phone}
            value={phoneValue}
            onChange={handlePhoneValue}
          />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            id={styles.pwd}
            value={passwordValue}
            onChange={handlePasswordValue}
          />
          <input
            className={styles.input}
            placeholder="Confirm password"
            type="password"
            id={styles.conf_pwd}
          />
        </div>
        <span className={styles.agreement}>
          <input type="checkbox" />
          <p className={styles.agreement_text}>
            I agree to all the Terms and Privacy Policies
          </p>
        </span>
        <div className={styles.create_acc}>
          {/* <button className={styles.btn}>Create account</button> */}
          <div className={styles.button}>
            <CreateAccButton text="Create account" to="/flight_listing" click={handleClick}/>
          </div>
          <p className={styles.create_text}>Already have an account? Login</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.or_signup}>
          <p className={styles.or_signup_text}>Or Sign up with</p>
        </div>
        <div className={styles.media_container}>
          <div className={styles.media}>
            <img src="./public/icons/facebook.png" alt="" />
          </div>
          <div className={styles.media}>
            <img src="./public/icons/google.png" alt="" />
          </div>
          <div className={styles.media}>
            <img src="./public/icons/apple.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;



