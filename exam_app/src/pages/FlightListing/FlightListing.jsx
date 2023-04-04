import React from "react";
import styles from "./FlightListing.module.css";
import ProfileNav from "../../components/Navbars/ProfileNav/ProfileNav";
import FlightSelection2 from "../../components/Card/Flight/FlightsSelection/FlightSelection2/FlightSelection2";
import SortType from "../../components/Card/SortType/SortType";
import Filter from "../../components/UI/Filter/Filter";
import FlightDetail from "../../components/Card/Flight/FligthtDetail/FlightDetail";
import MultiRangeSlider from "../../components/UI/multiRangeSlider/MultiRangeSlider";
import Rate from "../../components/UI/Rate/Rate";
import Checkbox from "../../components/UI/Checkbox/Checkbox";

const FlightListing = () => {
  return (
    <main className={styles.container}>
      <nav>
        <ProfileNav />
      </nav>
      <div className={styles.flight_select}>
        <FlightSelection2 />
      </div>
      <section className={styles.main__section}>
        <div className={styles.sort_container}>
          <div className={styles.filters}>
            <h2 className={styles.sort_title}>Filters</h2>
            <div className={styles.ranges}>
              <Filter text="Price" min={50} max={1200} />
              <Filter text="Departure Time" min={1200} max={1500} />
            </div>
          </div>
          <div className={styles.rating}>
            <h2 className={styles.sort_title}>Rating</h2>
            <div className={styles.rates}>
              <Rate text="0+" />
              <Rate text="1+" />
              <Rate text="2+" />
              <Rate text="3+" />
              <Rate text="4+" />
            </div>
          </div>
          <div className={styles.airlines}>
            <h2 className={styles.sort_title}>Airlines</h2>
            <div className={styles.checkboxes}>
              <Checkbox text="Emirated"/>
              <Checkbox text="Fly Dubai"/>
              <Checkbox text="Qatar"/>
              <Checkbox text="Etihad"/>
            </div>
          </div>
          <div className={styles.trips}>
            <h2 className={styles.sort_title}>Trips</h2>
            <div className={styles.checkboxes}>
              <Checkbox text="Round trip"/>
              <Checkbox text="On Way"/>
              <Checkbox text="Multi-City"/>
              <Checkbox text="My Dates Are Flexible"/>
            </div>
          </div>
        </div>

        <div className={styles.flights_container}>
          <SortType />
          <FlightDetail
            img="./public/img/emirates.png"
            price="$104"
            departure_time="12:00 pm"
            departure_time2="12:00 pm"
            time="2h 28m"
            time2="2h 28m"
            arrive="01:28 am"
            arrive2="01:28 am"
          />
          <FlightDetail
            img="./public/img/flydubai.png"
            price="$104"
            departure_time="12:00 pm"
            departure_time2="12:00 pm"
            time="2h 28m"
            time2="2h 28m"
            arrive="01:28 am"
            arrive2="01:28 am"
          />
          <FlightDetail
            img="./public/img/qatar.png"
            price="$104"
            departure_time="12:00 pm"
            departure_time2="12:00 pm"
            time="2h 28m"
            time2="2h 28m"
            arrive="01:28 am"
            arrive2="01:28 am"
          />
          <FlightDetail
            img="./public/img/etihad.png"
            price="$104"
            departure_time="12:00 pm"
            departure_time2="12:00 pm"
            time="2h 28m"
            time2="2h 28m"
            arrive="01:28 am"
            arrive2="01:28 am"
          />
        </div>
      </section>
    </main>
  );
};

export default FlightListing;
