import React from "react";
import styles from "./HotelListing.module.css";
import Rate from "../../components/UI/Rate/Rate";

const HotelListing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <section className={styles.header__left_section}>
          <label className={styles.title_lable}>
            <h1 className={styles.header_title}>
              CVK Park Bosphorus Hotel Istanbul
            </h1>
            <img src="./public/icons/rebStar.svg" alt="" />
            <img src="./public/icons/rebStar.svg" alt="" />
            <img src="./public/icons/rebStar.svg" alt="" />
            <img src="./public/icons/rebStar.svg" alt="" />
            <img src="./public/icons/rebStar.svg" alt="" />
            <p className={styles.stars}>5 Star Hotel</p>
          </label>
          <label className={styles.header_label}>
            <img src="./public/icons/location.svg" alt="" />
            <p className={styles.header_subtitle}>
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </p>
          </label>
          <div className={styles.rates_container}>
            <Rate text="4.2" />
            <p className={styles.reviews}>
              <b>Very Good</b> 54 reviews
            </p>
          </div>
        </section>
        <section className={styles.header__right_section}>
          <h1 className={styles.price}>$240</h1>
          <div className={styles.buttons}>
            <div className={styles.share}>
              <img src="/public/icons/heart.svg" alt="" />
            </div>
            <div className={styles.share}>
              <img src="/public/icons/Share.svg" alt="" />
            </div>
            <button className={styles.btn}>Download</button>
          </div>
        </section>
      </div>
      <main>
        <section className={styles.image_grid}>
          <div id={styles.img1} className={styles.img}>
            <img src="./public/img/hotelPhoto(1).png" alt="" />
          </div>
          <div id={styles.img2} className={styles.img}>
            <img src="./public/img/hotelPhoto(2).png" alt="" />
            <div id={styles.img3} className={styles.img}>
              <img src="./public/img/hotelPhoto(3).png" alt="" />
            </div>
          </div>
          <div id={styles.img4} className={styles.img}>
            <img src="./public/img/hotelPhoto(4).png" alt="" />
          </div>
        </section>
        <div className={styles.split}></div>
        <section className={styles.content_section}>
          <h1 className={styles.content_title}>Overview</h1>
          <p className={styles.content_text}>
            Overview Located in Taksim Gmsuyu, the heart of Istanbul, the CVK
            Park Bosphorus Hotel Istanbul has risen from the ashes of the
            historic Park Hotel, which also served as Foreign Affairs Palace 120
            years ago and is hosting its guests by assuming this hospitality
            mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
            fitness area, 18 meeting rooms including 4 dividable ones and 3
            terraces with Bosphorus view, Istanbuls largest terrace with
            Bosphorus view (4500 m2) and latest technology infrastructure, CVK
            Park Bosphorus Hotel Istanbul is destined to be the popular
            attraction point of the city. Room and suite categories at various
            sizes with city and Bosphorus view, as well as 68 separate luxury
            suites, are offered to its special guests as a wide variety of
            selection.
          </p>
          <div className={styles.overviews_container}>
            <div className={styles.overview_block}>
              <h1 className={styles.rate}>4.2</h1>
              <span className={styles.overview_span}>
                <h4 className={styles.good}>Very good</h4>
                <p className={styles.review_amount}>371 reviews</p>
              </span>
            </div>
            <div className={styles.overview_block}>
              <img
                className={styles.icon}
                src="./public/icons/stars.svg"
                alt=""
              />
              <p className={styles.review_amount}>Near park</p>
            </div>
            <div className={styles.overview_block}>
              <img
                className={styles.icon}
                src="./public/icons/stars.svg"
                alt=""
              />
              <p className={styles.review_amount}>Near nightlife</p>
            </div>
            <div className={styles.overview_block}>
              <img
                className={styles.icon}
                src="./public/icons/stars.svg"
                alt=""
              />
              <p className={styles.review_amount}>Near theater</p>
            </div>
            <div className={styles.overview_block}>
              <img
                className={styles.icon}
                src="./public/icons/stars.svg"
                alt=""
              />
              <p className={styles.review_amount}>Clean Hotel</p>
            </div>
          </div>
        </section>
        <div className={styles.split}></div>
        <section className={styles.map_section}>
          <h1 className={styles.content_title}>Location/Map</h1>
        </section>
      </main>
    </div>
  );
};

export default HotelListing;
