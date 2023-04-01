import React from "react";
import Button from "../../../UI/Button/Button";
import SeeButton from "../../../UI/SeeButton/SeeButton";
import styles from "./HistoryStays.module.css";

function HistoryStays() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.img_container}>
            <img className={styles.img} src="./public/icons/cvk.png" />
          </div>
          <div className={styles.ewr_date_gate_container}>
            <div className={styles.ewrs_container}>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Thur, Dec 8</h2>
              </div>
              <div className={styles.tire}>
                <p>-</p>
              </div>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Fri, Dec 9</h2>
              </div>
            </div>
          </div>

          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/date.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In time</h4>
                <h2 className={styles.textsH2}>12:00pm</h2>
              </div>
            </div>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/time.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In out</h4>
                <h2 className={styles.textsH2}>11:30am</h2>
              </div>
            </div>
          </div>
          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/gate.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Room no.</h4>
                <h2 className={styles.textsH2}>On arrival</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons_container}>
          <Button text="Download Ticket" />
          <SeeButton icon="./public/icons/menshe.svg" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.img_container}>
            <img className={styles.img} src="./public/icons/cvk.png" />
          </div>
          <div className={styles.ewr_date_gate_container}>
            <div className={styles.ewrs_container}>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Thur, Dec 8</h2>
              </div>
              <div className={styles.tire}>
                <p>-</p>
              </div>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Fri, Dec 9</h2>
              </div>
            </div>
          </div>

          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/date.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In time</h4>
                <h2 className={styles.textsH2}>12:00pm</h2>
              </div>
            </div>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/time.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In out</h4>
                <h2 className={styles.textsH2}>11:30am</h2>
              </div>
            </div>
          </div>
          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/gate.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Room no.</h4>
                <h2 className={styles.textsH2}>On arrival</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons_container}>
          <Button text="Download Ticket" />
          <SeeButton icon="./public/icons/menshe.svg" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.img_container}>
            <img className={styles.img} src="./public/icons/cvk.png" />
          </div>
          <div className={styles.ewr_date_gate_container}>
            <div className={styles.ewrs_container}>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Thur, Dec 8</h2>
              </div>
              <div className={styles.tire}>
                <p>-</p>
              </div>
              <div className={styles.ewr_container}>
                <h4 className={styles.h4}>Check-In</h4>
                <h2 className={styles.h2}>Fri, Dec 9</h2>
              </div>
            </div>
          </div>

          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/date.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In time</h4>
                <h2 className={styles.textsH2}>12:00pm</h2>
              </div>
            </div>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/time.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Check-In out</h4>
                <h2 className={styles.textsH2}>11:30am</h2>
              </div>
            </div>
          </div>
          <div className={styles.description_container}>
            <div className={styles.description__container}>
              <div className={styles.imgs_container}>
                <img src="./public/icons/gate.svg" alt="" />
              </div>
              <div className={styles.texts_container}>
                <h4 className={styles.textsH4}>Room no.</h4>
                <h2 className={styles.textsH2}>On arrival</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons_container}>
          <Button text="Download Ticket" />
          <SeeButton icon="./public/icons/menshe.svg" />
        </div>
      </div>
    </div>
  );
}

export default HistoryStays;
