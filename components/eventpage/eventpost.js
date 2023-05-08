import React from "react";
import Styles from "../../styles/EventPost.module.css";
import Kharai from "../../public/images/pehlikarahi.png";
import Calendar from "../../public/images/Calendar 2.png";
import Locatin from "../../public/images/Locatin (1).png";
import Image from "next/image";
function EventPost() {
  return (
    <div className={Styles.bigbox}>
      <div className={Styles.flexbox}>
        <Image src={Kharai} alt="" />
        <div>
          <div className={Styles.flexsmallbox}>
            <Image src={Calendar} alt="" className={Styles.cel} />
            <p className={Styles.text14}>14</p>
            <p className={Styles.texta}>APR</p>
          </div>
          <hr className={Styles.line} />
          <p className={Styles.textap}>April 14,2023 10:00PM- April 16,2023</p>
          <p className={Styles.text144}>Pohela Boisakh</p>
          <div className={Styles.flexsmallbox}>
            <Image src={Locatin} alt="" />
            <p className={Styles.texth}>
              Hilton Hotel, Jacksion Heights NY 10473
            </p>
          </div>
        </div>
      </div>
      <p className={Styles.textap}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        <a> Read More..</a>
      </p>
    </div>
  );
}

export default EventPost;
