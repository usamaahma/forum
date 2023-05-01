import React from "react";
import Styles from "../../styles/NewsEvents.module.css";
import Calendar from "../../public/images/Calendar 2.png";
import Image from "next/image";
function NewsEvent() {
  return (
    <div>
      <div className={Styles.mainNewsevent}>
        <div className={Styles.flexbox}>
          <Image src={Calendar} alt="abc" />
          <p className={Styles.poltext}>Pohela Boisakh</p>
        </div>
        <div className={Styles.flexbox}>
          <p className={Styles.poltext1}>14</p>
          <p className={Styles.aptext}>April 14,2023 10:00PM- April 16,2023</p>
        </div>
        <div className={Styles.flexbox}>
          <p className={Styles.aptext1}>APR</p>
          <p className={Styles.streettext}>
            72 Street, Jacksion Heights, NY USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsEvent;
