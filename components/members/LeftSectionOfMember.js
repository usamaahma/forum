import React from "react";
import Styles from "../../styles/LeftSectionOfMember.module.css";
import Image from "next/image";
import Facebook from "../../public/images/faceb.png";
import Twitter from "../../public/images/twitter.png";
import Instgram from "../../public/images/insta.png";
import Linkdin from "../../public/images/linkdin.png";
import Trade from "../../public/images/Icon (2).png";
import Comment from "../../public/images/Comment.png";
import Profile from "../../public/images/Group (1).png";
import Right from "../../public/images/Right-arrow.png";
import RecentPost from "../RecentPost";
import dataOne from "../../dataOne.json";
import RecentBlog from "./RecentBlog";
import Link from "next/link";

function LeftSectionOfMembers() {
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
        <Link href="/TopicPage">
          <div className={Styles.rowdiv}>
            <div className={Styles.rowdiv2}>
              <div className={Styles.circle2}>
                <Image src={Trade} />{" "}
              </div>
              <div className={Styles.marginleft}>
                <p style={{ color: "#000000" }}>32</p>
                <p style={{ color: "#737373" }}>Topic</p>
              </div>
            </div>
            <div>
              <Image src={Right} />
            </div>
          </div>
        </Link>
        <Link href="/membersPage">
          <div className={Styles.rowdiv}>
            <div className={Styles.rowdiv2}>
              <div className={Styles.circle2}>
                <Image src={Comment} />
              </div>
              <div className={Styles.marginleft}>
                <p style={{ color: "#000000" }}>100</p>
                <p style={{ color: "#737373" }}>COMMENTS</p>
              </div>
            </div>
            <div>
              <Image src={Right} />
            </div>
          </div>
        </Link>
        <Link href="/memberPageTwo">
          <div className={Styles.rowdiv}>
            <div className={Styles.rowdiv2}>
              <div className={Styles.circle2}>
                <Image src={Profile} />
              </div>
              <div className={Styles.marginleft}>
                <p style={{ color: "#000000" }}>200</p>
                <p style={{ color: "#737373" }}>Members</p>
              </div>
            </div>
            <div>
              <Image src={Right} />
            </div>
          </div>
        </Link>
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
        <p className={Styles.jointext}>Recent Blog</p>
        <hr />
      </div>
      {dataOne.map(() => (
        <div>
          <RecentBlog />
        </div>
      ))}
    </div>
  );
}

export default LeftSectionOfMembers;
