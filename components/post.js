import React from "react";
import Styles from "../styles/Post.module.css";
import Image from "next/image";
import Profile from "../public/images/Ellipse 9.png";
import Dot from "../public/images/3 dots.png";
import Note from "../public/images/note.png";
import Link from "../public/images/Like.png";
import Comment from "../public/images/Comment (1).png";
import { Tag } from "antd";
function Post() {
  return (
    <div className={Styles.bigpostbox}>
      <div className={Styles.postbox}>
        <div className={Styles.subpostbox}>
          <Image src={Profile} />
          <div className={Styles.divleft}>
            <p className={Styles.istext}>Istiaq Firoz</p>
            <p className={Styles.hour}>2 Hours ago </p>
          </div>
          <div>
            <Tag color="#DEF5D3" className={Styles.textclr}>
              Plumber
            </Tag>
          </div>
        </div>
        <div>
          <Image src={Dot} />
        </div>
      </div>
      <hr className={Styles.line} />
      <div style={{ padding: "1rem" }}>
        <p className={Styles.cantext}>
          I can help you for Tax Preperation. If you need help please contact me
          912-320-2020
        </p>
        <Image src={Note} className={Styles.imgsize} />
        <div className={Styles.centerico}>
          <div className={Styles.centerico1}>
            <Image src={Link} /> <p className={Styles.textleft}>25</p>
          </div>
          <div className={Styles.centerico1}>
            <Image src={Comment} /> <p className={Styles.textleft}>30</p>
          </div>
        </div>
      </div>
      <hr className={Styles.line} />
      <div className={Styles.postbox}>
        <div className={Styles.subpostbox}>
          <Image
            style={{ width: "2rem", height: "2rem", marginTop: "-2rem" }}
            src={Profile}
          />
          <div className={Styles.divleft}>
            <p className={Styles.fitext}>Istiaq Firoz</p>
            <p className={Styles.hour}>2 Hours ago </p>
            <p className={Styles.wheretext}>Where is the location?</p>
            <p className={Styles.hour}>Reply</p>
          </div>
        </div>
        <div>
          <Image src={Dot} />
        </div>
      </div>
    </div>
  );
}

export default Post;
