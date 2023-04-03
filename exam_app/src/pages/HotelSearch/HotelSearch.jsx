import React from "react";
import styles from "./HotelSearch.module.css";
import FlightsSelection from "../../Components/Card/Flight/flightsSelection/flightsSelection";
import Footer from "../../Components/Footer/Footer";
import FooterCard from "../../Components/Footer/FooterCard/FooterCard";
import AllSee from "../../Components/UI/AllSee/AllSee";
import BookFlight from "../../Components/Card/Flight/BookFlight/BookFlight";
import BookJourney from "../../Components/Card/Flight/BookFlight/BookJourney/BookJourney";
import Navbar from "../../Components/Navbars/Navbar/Navbar";
import Ticket from "../../Components/Card/Flight/Ticket/Ticket";

function HotelSearch() {
  return (
    <div className={styles.main}>
      <section className={styles.first_section}>
        <div className={styles.flightsSelection}>
          <FlightsSelection />
        </div>
      </section>
      <section className={styles.second_section}></section>
      <div className={styles.ticket_container}>
        <h1 className={styles.ticketTitle}>Your recent searches</h1>
        <div className={styles.tickets}>
          <Ticket img="./public/img/turkey.png" city="Istanbul, Turkey" />
          <Ticket img="./public/img/australia.png" city="Sydney, Australia" />
          <Ticket img="./public/img/azerbaijan.png" city="Baku, Azerbaijan" />
        </div>
      </div>
      <section className={styles.third_section}>
        <div className={styles.third__all_see}>
          <AllSee
            subject="Fall into travel"
            text="Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination."
            btn_text="See All"
          />
        </div>
      </section>
      <section className={styles.fourth_section}>
        <div className={styles.cards}>
          <BookFlight
            city="Melbourne"
            text="An amazing journey"
            price="$ 700"
            img="../public/img/Melbourne 1.png"
          />
          <BookFlight
            city="Paris"
            text="A Paris Adventure"
            price="$ 600"
            img="../public/img/Paris 2.png"
          />
          <BookFlight
            city="London"
            text="London eye adventure"
            price="$ 350"
            img="../public/img/London 3.png"
          />
          <BookFlight
            city="Columbia"
            text="Amazing streets"
            price="$ 700"
            img="../public/img/Columbia 4.png"
          />
        </div>
      </section>
      <section className={styles.fifth_section}>
        <div className={styles.fifth__all_see}>
          <AllSee
            subject="Fall into travel"
            text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btn_text="See All"
          />
        </div>
        <div className={styles.book_journey}>
          <BookJourney
            img1="../public/img/SriLanka1.png"
            img2="../public/img/SriLanka2.png"
            img3="../public/img/SriLanka3.png"
            img4="../public/img/SriLanka4.png"
          />
        </div>
      </section>
      <footer>
        {/* <div className={styles.cardFooter}>
          <FooterCard
            subject="Subscribe Newsletter"
            title="The Travel"
            text="Get inspired! Receive travel discounts, tips and behind the scenes stories."
            email="Your email address"
            btn_value="Subscribe"
          />
        </div> */}
        {/* <Footer logo="../public/img/darkLogo.png" /> */}
      </footer>
    </div>
  );
}

export default HotelSearch;
