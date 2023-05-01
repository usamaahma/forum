import React from "react";
import Styles from "../../styles/RecentBlog.module.css";
import Image from "next/image";
import Boy from "../../public/images/bus.png";
import { Tag } from "antd";
function LastestNews() {
  return (
    <div className={Styles.mainpostdiv}>
      <div className={Styles.flexdiv}>
        <Image src={Boy} alt="abc" />
        <div className={Styles.boxleft}>
          <Tag color="#DEF5D3" className={Styles.textclr}>
            News
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
      </div>
    </div>
  );
}

export default LastestNews;
