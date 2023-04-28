import React from "react";
import Styles from "../styles/RecentPost.module.css";
import Image from "next/image";
import Boy from "../public/images/Ellipse 9.png";
import Link from "../public/images/Like.png";
import Comment from "../public/images/Comment (1).png";
import { Tag } from "antd";
function RecentPost() {
  return (
    <div>
      <div className={Styles.flexdiv}>
        <Image src={Boy} />
        <div>
          <p className={Styles.textish}>Istiaq Firoz</p>
          <Tag color="#DEF5D3" className={Styles.textclr}>
            Plumber
          </Tag>
        </div>
        <div>
          <p className={Styles.hour}>2 Hours ago </p>
        </div>
      </div>
      <p className={Styles.para}>
        I am Looking for a plumber for my
        <br /> house anybody can suggest me a<br /> good good plumber......
        <a className={Styles.paraone}>Read More</a>
      </p>
      <hr className={Styles.line} />
      <div className={Styles.centerico}>
        <div className={Styles.centerico1}>
          <Image src={Link} /> <p className={Styles.textleft}>25</p>
        </div>
        <div className={Styles.centerico1}>
          <Image src={Comment} /> <p className={Styles.textleft}>30</p>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
