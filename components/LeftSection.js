import React from "react";
import Styles from "../styles/LeftSection.module.css";
import Image from "next/image";
import Facebook from "../public/images/Icon (1).png";
import Twitter from "../public/images/Icon.png";
import Instgram from "../public/images/Group 131.png";
import Linkdin from "../public/images/Group 132.png";
import Trade from "../public/images/Icon (2).png";
import Comment from "../public/images/Comment.png";
import Profile from "../public/images/Group (1).png";
import Right from "../public/images/Right-arrow.png";
import RecentPost from "./RecentPost";
import dataOne from "../dataOne.json";
import Community from "./Community";
function LeftSection() {
  const data = [
    {
      name: "32",
      subname: "Topic",
      icon: <Image src={Trade} />,
    },
    {
      name: "32",
      subname: "Topic",
      icon: <Image src={Comment} />,
    },
    {
      name: "32",
      subname: "Topic",
      icon: <Image src={Profile} />,
    },
  ];
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
            <Image src={Twitter} />
          </div>
          <div className={Styles.circle}>
            <Image src={Facebook} />
          </div>
          <Image src={Instgram} />
          <Image src={Linkdin} />
        </div>
        <p className={Styles.nottext}>
          Not Account? <a className={Styles.nottextone}>Sign Up</a>
        </p>
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Forum Statics</p>
        <hr />
        {data.map((user) => (
          <div className={Styles.rowdiv}>
            <div className={Styles.rowdiv2}>
              <div className={Styles.circle2}> {user.icon} </div>
              <div className={Styles.marginleft}>
                <p>{user.name}</p>
                <p>{user.subname}</p>
              </div>
            </div>
            <div>
              <Image src={Right} />
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Recent Post</p>
        <hr />

        {dataOne.map(() => (
          <div>
            <RecentPost />
          </div>
        ))}
      </div>
      <div className={Styles.boxdiv}>
        <p className={Styles.jointext}>Community Member</p>
        <hr />
      </div>
      {dataOne.map(() => (
        <div>
          <Community />
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
