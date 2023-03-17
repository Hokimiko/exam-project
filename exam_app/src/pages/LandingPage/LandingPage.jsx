import React from "react";
import FlightsSelection from "../../components/Card/Flight/flightsSelection/flightsSelection";
import Ticket from "../../components/Card/Flight/Ticket/Ticket";
import Navbar from "../../components/Navbar/Navbar";
import SeeButton from "../../components/UI/SeeButton/SeeButton";
import styles from "./LandingPage.module.css";
import ShowFlight from "../../components/Card/Flight/ShowFlight/ShowFlight";
import Review from "../../components/Card/Review/Review";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <section className={styles.header__section}>
          <div className={styles.backdrop}></div>
          <img
            className={styles.header__img}
            src="/public/img/1st_header.jpg"
            alt=""
          />
          <div className={styles.navbar_container}>
            <div className={styles.navbar}>
              <Navbar />
            </div>
            <div className={styles.text_container}>
              <h3 className={styles.subtitle}>Helping Others</h3>
              <h1 className={styles.title}>Live & Travel</h1>
              <p className={styles.text}>Special offers to suit your plan</p>
            </div>
          </div>
        </section>
        <div className={styles.flight}>
          <FlightsSelection />
        </div>
      </header>
      <main>
        <section className={styles.main__section_1st}>
          <div className={styles.section_1st_title_container}>
            <div className={styles.section_1st_text_container}>
              <h1 className={styles.section_1st_title}>
                Plan your perfect trip
              </h1>
              <p className={styles.section_1st_text}>
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <div className={styles.section_1st_button}>
              <SeeButton text="See more places" />
            </div>
          </div>
          <div className={styles.tickets_container}>
            <div className={styles.tickets_grid}>
              <Ticket img="./public/img/turkey.png" city="Istanbul, Turkey" />
              <Ticket
                img="./public/img/australia.png"
                city="Sydney, Australia"
              />
              <Ticket
                img="./public/img/azerbaijan.png"
                city="Baku, Azerbaijan"
              />
              <Ticket img="./public/img/maldives.png" city="Malé, Maldives" />
              <Ticket img="./public/img/france.png" city="Paris, France" />
              <Ticket img="./public/img/US.png" city="New York, US" />
              <Ticket img="./public/img/Uk.png" city="London, UK" />
              <Ticket img="./public/img/japan.png" city="Tokyo, Japan" />
              <Ticket img="./public/img/dubai.png" city="Dubai, UAE" />
            </div>
          </div>
        </section>
        <section className={styles.main__section_2nd}>
          <ShowFlight
            img="./public/img/Flight.jpg"
            subject="Flights"
            text="Search Flights & Places Hire to our most popular destinations"
            icon="./public/icons/telegram.png"
            btn_text="Show Flights"
          />
          <ShowFlight
            img="./public/img/Hotels.jpg"
            subject="Hotels"
            text="Search Hotels & Places Hire to our most popular destinations"
            icon="./public/icons/telegram.png"
            btn_text="Show Hotels"
          />
        </section>
        <section className={styles.main__section_3rd}>
          <div className={styles.section_1st_title_container}>
            <div className={styles.section_1st_text_container}>
              <h1 className={styles.section_1st_title}>Reviews</h1>
              <p className={styles.section_1st_text}>
                What people says about Golobe facilities
              </p>
            </div>
            <div className={styles.section_1st_button}>
              <SeeButton text="See all" />
            </div>
          </div>
          <div className={styles.reviews_container}>
            <Review
              subject="“A real sense of community, nurtured”"
              text="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
              name="Olga"
              studios="Kai Tak"
              img="./public/img/Review 36.jpg"
            />
            <Review
              subject="“The facilities are superb. Clean, slick, bright.”"
              text="“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle"
              name="Thomas"
              studios="Olimpic"
              img="./public/img/Review 37.jpg"
            />
            <Review
              subject="“A real sense of community, nurtured”
              "
              text="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
              "
              name="Eliot"
              studios="Kai Tak"
              img="./public/img/Review 38.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
