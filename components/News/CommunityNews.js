import React from "react";
import Styles from "../../styles/CommunityNews.module.css";
import Comm from "../../public/images/Rectangle 4642.png";
import Image from "next/image";
function CommunityNews() {
  return (
    <div>
      <div className={Styles.mainboxcom}>
        <div>
          <Image className={Styles.imgstyle} src={Comm} alt="" />
        </div>
        <div className={Styles.marleft}>
          <div className={Styles.mainboxcom1}>
            <button className={Styles.btncom}>Business </button>
            <p className={Styles.jantext}>22 Jan, 2023</p>
          </div>
          <p className={Styles.int}>
            Interview Question: Why Dont You Have Food?
          </p>
          <p className={Styles.int1}>
            I am Looking for a plumber for my house anybody can.I
            <br /> am Looking for a plumber for my house anybody can.
            <br /> <a className={Styles.smalltext}>Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityNews;
