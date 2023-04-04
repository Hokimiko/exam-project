import React from "react";
import styles from "./FlightBookingDetails_3.module.css";
import CreateAccButton from "../../components/UI/CreateAccButton/CreateAccButton";
import BussinessClass from "../../components/Card/Flight/BussinessClass/BussinessClass";
import ProfileNav from "../../components/Navbars/ProfileNav/ProfileNav";

const FlightBookingDetails_3 = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ProfileNav/>
      </nav>
      <div className={styles.header}>
        <section className={styles.header__left_section}>
          <h1 className={styles.header_title}>Emirates A380 Airbus</h1>
          <label className={styles.header_label}>
            <img src="./public/icons/location.svg" alt="" />
            <p className={styles.header_subtitle}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </p>
          </label>
        </section>
        <section className={styles.header__right_section}>
          <h1 className={styles.price}>$240</h1>
          <div className={styles.buttons}>
            <div className={styles.share}>
              <img src="/public/icons/Share.svg" alt="" />
            </div>
            <button className={styles.btn}>Download</button>
          </div>
        </section>
      </div>
      <main>
        <section className={styles.main__section_ticket}>
          <BussinessClass />
          <div className={styles.image}>
            <img src="./public/img/flight_direction.png" alt="" />
          </div>
        </section>
        <h1 className={styles.content_title}>Terms and Conditions</h1>
        <section className={styles.content_section}>
          <h1 className={styles.content_subtitle}>Payments</h1>
          <ul>
            <li className={styles.content_text}>
              · If you are purchasing your ticket using a debit or credit card via
              the Website, we will process these payments via the automated
              secure common payment gateway which will  be subject to fraud
              screening purposes.
            </li>
            <li className={styles.content_text}>
              · If you do not supply the correct card billing address and/or
              cardholder information, your booking will not be confirmed and the
              overall cost may increase. We reserve the right to cancel your
              booking if payment is declined for any reason or if you have
              supplied incorrect card information. If we become aware of, or is
              notified of, any fraud or illegal activity associated with the
              payment for the booking, the booking will be cancelled and you
              will be liable for all costs and expenses arising from such
              cancellation, without prejudice to any action that may be taken
              against us.
            </li>
            <li className={styles.content_text}>
              · Golobe may require the card holder to provide additional payment
              verification upon request by either submitting an online form or
              visiting the nearest Golobe office, or at the airport at the time
              of check-in. Golobe reserves the right to deny boarding or to
              collect a guarantee payment (in cash or from another credit card)
              if the card originally used for the purchase cannot be presented
              by the cardholder at check-in or when collecting the tickets, or
              in the case the original payment has been withheld or disputed by
              the card issuing bank. Credit card details are held in a secured
              environment and transferred through an internationally accepted
              system.
            </li>
          </ul>
        </section>
        <section className={styles.content_section}>
          <h1 className={styles.content_subtitle}>Contact Us</h1>
          <p className={styles.content_text}>
            If you have any questions about our Website or our Terms of Use,
            please contact: <br /> Golobe Group Q.C.S.C <br /> Golobe Tower{" "}
            <br /> P.O. Box: 22550 <br />
            Doha, State of Qatar <br /> Further contact details can be found at {}
            <a href="">golobe.com/help</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default FlightBookingDetails_3;
