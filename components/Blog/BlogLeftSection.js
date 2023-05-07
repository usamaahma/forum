import React from "react";
import Styles from "../../styles/BlogLeftSection.module.css";
import Image from "next/image";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import dataOne from "../../dataOne.json";
import RecentBlog from "../members/RecentBlog";
import NewsEvent from "../News/NewsEvent";

function BlogLeftSection() {
  return (
    <div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Join The Community</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "7rem",
            border: "#42b00f 1px solid",
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
          <Image src={Twitter} alt="abc" />
          <Image src={Facebook} alt="abc" />
          <Image src={Linkdin} alt="abc" />
          <Image src={Instgram} alt="abc" />
        </div>
        <p className={Styles.nottext}>
          Not Account? <a className={Styles.nottextone}>Sign Up</a>
        </p>
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Recent Blog</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "7rem",
            border: "#42b00f 1px solid",
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
              width: "7rem",
              border: "#42b00f 1px solid",
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

export default BlogLeftSection;
