import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
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
            id={styles.inp1}
          />
          <input
            className={styles.input}
            placeholder="Last name"
            type="text"
            id={styles.inp2}
          />
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            id={styles.inp3}
          />
          <input
            className={styles.input}
            placeholder="Phone number"
            type="text"
            id={styles.inp4}
          />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            id={styles.inp5}
          />
          <input
            className={styles.input}
            placeholder="Confirm password"
            type="password"
            id={styles.inp6}
          />
        </div>
        <span className={styles.agreement}>
          <input type="checkbox" />
          <p className={styles.agreement_text}>
            I agree to all the Terms and Privacy Policies
          </p>
        </span>
        <div className={styles.create_acc}>
          <button className={styles.btn}>Create account</button>
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
