import React from "react";
import Styles from "../../styles/NewsLeftSection.module.css";
import Image from "next/image";
import Facebook from "../../public/images/faceb.png";
import Twitter from "../../public/images/twitter.png";
import Instgram from "../../public/images/insta.png";
import Linkdin from "../../public/images/linkdin.png";
import dataOne from "../../dataOne.json";
import RecentBlog from "../members/RecentBlog";
import Link from "next/link";
import LastestNews from "./LastestNews";
import NewsEvent from "./NewsEvent";

function NewsLeftSection() {
  return (
    <div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Join The Community</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "9.3rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <p className={Styles.textcenter}>Join with Us</p>
        <div className={Styles.btncenter}>
          <button className={Styles.btnlog}>
            <p>Login</p>
          </button>
        </div>
        <p className={Styles.textcenter}>Connect With</p>
        <div className={Styles.flexrow}>
          <div className={Styles.circle}>
            <Image src={Twitter} alt="abc" />
          </div>
          <div className={Styles.circle}>
            <Image src={Facebook} alt="abc" />
          </div>
          <Image src={Instgram} alt="abc" />
          <Image src={Linkdin} alt="abc" />
        </div>
        <p className={Styles.nottext}>
          Not Account? <a className={Styles.nottextone}>Sign Up</a>
        </p>
      </div>

      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Latest News</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "5.5rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        {dataOne.map((index) => (
          <div key={index}>
            <LastestNews />
          </div>
        ))}
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Recent Blog</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "5.5rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
      </div>
      {dataOne.map((index) => (
        <div key={index}>
          <RecentBlog />
        </div>
      ))}
      <div>
        <div className={Styles.boxdiv}>
          <p className={Styles.jointext}>Events</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 1,
              width: "3rem",
              border: "#42b00f 1px solid",
              position: "absolute",
            }}
          ></div>
          <hr />
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

export default NewsLeftSection;
