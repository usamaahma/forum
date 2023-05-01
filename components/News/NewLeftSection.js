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

function NewsLeftSection() {
  return (
    <div>
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
        <hr />
        {dataOne.map((index) => (
          <div key={index}>
            <LastestNews />
          </div>
        ))}
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Recent Blog</p>
        <hr />
      </div>
      {dataOne.map((index) => (
        <div key={index}>
          <RecentBlog />
        </div>
      ))}
    </div>
  );
}

export default NewsLeftSection;
