import React from 'react'
import styles from './FlightBookingDetails_2.module.css'
import BookingDetailsCard from "../../components/Card/BookingDetailsCard/BookingDetailsCard";
import PaymentMethodCard from "../../components/Card/Payment/PaymentMethodCard/PaymentMethodCard";
import BookingForm from "../../components/Form/BookingForm/BookingForm";
import AirbusCard from "../../components/Card/AirbusCard/AirbusCard";
import ProfileNav from "../../components/Navbars/ProfileNav/ProfileNav";
import BookingAddCard from '../../components/Card/Payment/BookingAddCard/BookingAddCard';

const FlightBookingDetails_2 = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ProfileNav />
      </nav>
      <main className={styles.main}>
        <section className={styles.left__section}>
          <AirbusCard />
          <PaymentMethodCard/>
          <BookingAddCard/>
        </section>
        <section className={styles.right__section}>
          <BookingDetailsCard
            img="./public/img/emirates_plane.png"
            subtitle="Economy"
            title="Emirates A380 Airbus"
            basefare="$400"
            discount="$400"
            taxes="$400"
            fee="$400"
            total="$1600"
          />
        </section>
      </main>
    </div>
  );
};
export default FlightBookingDetails_2;