import React from "react";
import Styles from "../../styles/EventLeftSection.module.css";
import Image from "next/image";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import Calendertick from "../../public/images/calendertick.png";
import Calendercross from "../../public/images/calendercross.png";
import Phone from "../../public/images/Phone1.png";
import Location from "../../public/images/Locatin1.png";
import Notification from "../../public/images/Notification1.png";
import Email from "../../public/images/Email1.png";
import dataOne from "../../dataOne.json";
import RecentBlog from "../members/RecentBlog";
import NewsEvent from "../News/NewsEvent";

function EventLeftSection() {
  return (
    <div>
      <div>
        <p>Event Schedule</p>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
      </div>
      <div className={Styles.boxcal}>
        <div className={Styles.divcale}>
          <p className={Styles.textgreen}>Start Date</p>
          <Image src={Calendertick} />
          <p className={Styles.text22}>
            14 <a className={Styles.text33}>APR, 2023</a>
          </p>
        </div>
        <div className={Styles.divcale}>
          <p className={Styles.textgreen}>End Date</p>
          <Image src={Calendercross} />
          <p className={Styles.text22}>
            23 <a className={Styles.text33}>Dec, 2023</a>
          </p>
        </div>
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Event Info</p>
        <hr style={{ border: "1px solid #E8E8E8" }} />
      </div>
      <div className={Styles.greybox}>
        <div className={Styles.greysmll}>
          <div>
            <Image src={Notification} />
          </div>
          <div className={Styles.leftdiv}>
            <p className={Styles.bigtext}>Status</p>
            <p className={Styles.bigtext1}>Upcoming</p>
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <div>
            <Image src={Location} />
          </div>
          <div className={Styles.leftdiv}>
            <p className={Styles.bigtext}>Venue</p>
            <p className={Styles.bigtext1}>1329 Saint Lawrence USA </p>
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <div>
            <Image src={Phone} />
          </div>
          <div className={Styles.leftdiv}>
            <p className={Styles.bigtext}>Phone</p>
            <p className={Styles.bigtext1}>+1 929 656 1234</p>
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <div>
            <Image src={Email} />
          </div>
          <div className={Styles.leftdiv}>
            <p className={Styles.bigtext}>Email</p>
            <p className={Styles.bigtext1}>efat@gmail.com</p>
          </div>
        </div>
      </div>
      <br />
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Join The Community</p>
        <hr />
        <p className={Styles.textcenter}>Join with Us</p>
        <div className={Styles.btncenter}>
          <button className={Styles.btnlog}>
            <p>Login</p>
          </button>
        </div>
        <p className={Styles.textcenter}>Connect With</p>
        <div className={Styles.flexrow}>
          <Image src={Twitter} alt="abc" />
          <Image src={Facebook} alt="abc" />
          <Image src={Linkdin} alt="abc" />
          <Image src={Instgram} alt="abc" />
        </div>
        <p className={Styles.nottext}>
          Not Account? <a className={Styles.nottextone}>Sign Up</a>
        </p>
      </div>

      {dataOne.map((index) => (
        <div key={index}>
          <RecentBlog />
        </div>
      ))}
      <div>
        <div className={Styles.boxdiv}>
          <p className={Styles.jointext}>Events</p>
          <hr style={{ border: "1px solid #E8E8E8" }} />
        </div>
        {dataOne.map((index) => (
          <div key={index}>
            <NewsEvent />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventLeftSection;
