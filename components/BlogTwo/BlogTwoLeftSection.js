import React from "react";
import Styles from "../../styles/BlogTwoLeftSection.module.css";
import Image from "next/image";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import dataOne from "../../dataOne.json";
import RecentBlog from "../members/RecentBlog";
import NewsEvent from "../News/NewsEvent";

function BlogTwoLeftSection() {
  return (
    <div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Join The Community</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "9.5rem",
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
          <Image src={Twitter} alt="abc" />
          <Image src={Facebook} alt="abc" />
          <Image src={Linkdin} alt="abc" />
          <Image src={Instgram} alt="abc" />
        </div>
        <p className={Styles.nottext}>
          Not Account? <a className={Styles.nottextone}>Sign Up</a>
        </p>
      </div>
      <div className={Styles.greybox}>
        <div className={Styles.greysmll}>
          <p>Categories</p>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p>All Articles</p>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p>City & federal Facilities</p>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p>Job</p>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p>USA Life</p>
        </div>
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
        <hr style={{ border: "1px solid #E8E8E8" }} />
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

export default BlogTwoLeftSection;
