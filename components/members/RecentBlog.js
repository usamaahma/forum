import React from "react";
import Styles from "../../styles/RecentBlog.module.css";
import Image from "next/image";
import Boy from "../../public/images/Rectangle 4579.png";
import Link from "../../public/images/Like.png";
import Comment from "../../public/images/Comment (1).png";
import { Tag } from "antd";
function RecentBlog() {
  return (
    <div>
      <div className={Styles.flexdiv}>
        <Image src={Boy} />
        <div className={Styles.boxleft}>
          <Tag color="#DEF5D3" className={Styles.textclr}>
            Food
          </Tag>
          <p className={Styles.textish}>
            Interview Question:
            <br /> Why Dont You Have Food?
          </p>
        </div>
      </div>
      <p className={Styles.para}>
        I am Looking for a plumber for my
        <br /> house anybody can suggest me a<br /> good good plumber......
        <a className={Styles.paraone}>Read More</a>
      </p>
      <hr className={Styles.line} />
      <div className={Styles.centerico}>
        <p className={Styles.hour}>22 Jan, 2023</p>
        <div className={Styles.centerico12}>
          <div className={Styles.centerico123}>
            <Image src={Link} /> <p className={Styles.textleft}>25</p>
          </div>
          <div className={Styles.centerico123}>
            <Image src={Comment} /> <p className={Styles.textleft}>30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
