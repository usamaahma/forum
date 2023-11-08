import React from "react";
import Styles from "../../styles/CommunityNews.module.css";
import Comm from "../../public/images/Rectangle 4642.png";
import Image from "next/image";
function CommunityNews({ item }) {
  console.log(item, "tee");
  return (
    <div>
      <div className={Styles.mainboxcom}>
        <div>
          <img className={Styles.imgstyle} src={item?.image?.[0]} alt="" />
        </div>
        <div className={Styles.marleft}>
          <div className={Styles.mainboxcom1}>
            <button className={Styles.btncom}> {item?.newsCategoryId} </button>
            <p className={Styles.jantext}>22 Jan, 2023</p>
          </div>
          <p className={Styles.int}>{item?.heading} </p>
          <p className={Styles.int1}>{item?.heading}</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityNews;
