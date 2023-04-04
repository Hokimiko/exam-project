import React from "react";
import styles from "./FlightBookingDetails.module.css";
import BookingDetailsCard from "../../components/Card/BookingDetailsCard/BookingDetailsCard";
import PaymentMethodCard from "../../components/Card/Payment/PaymentMethodCard/PaymentMethodCard";
import BookingForm from "../../components/Form/BookingForm/BookingForm";
import AirbusCard from "../../components/Card/AirbusCard/AirbusCard";
import ProfileNav from "../../components/Navbars/ProfileNav/ProfileNav";

const FlightBookingDetails = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ProfileNav />
      </nav>
      <main className={styles.main}>
        <section className={styles.left__section}>
          <AirbusCard />
          <PaymentMethodCard/>
          <BookingForm/>
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

{
  /* <PaymentMethodCard/>     */
}
{
  /* 
      <BookingDetailsCard
        img="./public/img/cvk_hotel.png"
        subtitle="CVK Park Bosphorus..."
        title="Superior room - 1 double bed or 2 twin beds"
        basefare="$240"
        discount="$0"
        taxes="$20"
        fee="$5"
        total="$265"
      /> */
}

export default FlightBookingDetails;
