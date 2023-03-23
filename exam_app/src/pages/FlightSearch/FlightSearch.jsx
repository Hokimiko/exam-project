import React from "react";
import FlightsSelection from "../../components/Card/Flight/flightsSelection/flightsSelection";
import AllSee from "../../components/UI/AllSee/AllSee";
import BookFlight from "../../components/Card/Flight/BookFlight/BookFlight";
import styles from "./FlightSearch.module.css";
import map from "./map.jpg";
import BookJourney from "../../components/Card/Flight/BookFlight/BookJourney/BookJourney";
import Footer from "../../components/Footer/Footer";
import FooterCard from "../../components/Footer/FooterCard/FooterCard";
import FindFlight from "../../components/Navbars/FindFlight/FindFlight";

function FlightSearch() {
  return (
    <div className={styles.main}>
      <nav>
        <FindFlight/>
      </nav>
      <section className={styles.first_section}>
        <div className={styles.flightsSelection}>
          <FlightsSelection />  
        </div>
      </section>
      <section className={styles.second_section}>
        <div className={styles.second__all_see}>
          <AllSee
            subject="Let's go places together"
            text="Discover the latest offers and news and start planning your next trip with us."
            btn_text="See All"
          />
        </div>
        <div className={styles.map_container}>
          <img src={map} />
        </div>
      </section>
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
      
    </div>
  );
}

export default FlightSearch;
