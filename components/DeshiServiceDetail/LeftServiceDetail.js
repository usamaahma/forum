import React from "react";
import Styles from "../../styles/LeftServiceDetail.module.css";
import Image from "next/image";
import BigLap from "../../public/images/Rectangle 75.png";
import Watch from "../../public/images/watch.png";
import Like from "../../public/images/Like3.png";
import Location from "../../public/images/locationone.png";
import Eye from "../../public/images/Eye3.png";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import Mess from "../../public/images/Group 135.png";
import Laptop from "../../public/images/Rectangle 4573.png";
import Laptop1 from "../../public/images/Rectangle 4574.png";
import { HeartOutlined } from "@ant-design/icons";
import TabOfServiceDetails from "./TabOfServiceDetail";
import { Rate } from "antd";

function LeftServiceDetail({ data }) {
  console.log(data, "deee");
  return (
    <div>
      <div className={Styles.padding}>
        <div className={Styles.flexdivv}>
          <img className={Styles.imgstyle} src={data.image?.[0]} alt="abc" />
          <div className={Styles.heartdiv}>
            <HeartOutlined />
          </div>
          <div className={Styles.mblview}>
            <Image src={Laptop} alt="" className={Styles.sizelapimg} />
            <Image src={Laptop1} alt="" className={Styles.sizelapimg} />
          </div>
        </div>
        <div>
          <div className={Styles.btndiv}>
            <div className={Styles.flexstar}>
              <button className={Styles.btnuse}>Construction</button>
              <Rate value={1} count={1} className={Styles.strtext} />
              <p className={Styles.fivtext}> 5.0</p>
              <p className={Styles.ratetext}>(30+)</p>
            </div>
            <p className={Styles.pricetext}>{data.price}</p>
          </div>
          <h2 className={Styles.pricetext}>{data.title}</h2>
          <div className={Styles.watchdiv}>
            <Image src={Watch} alt="" />
            <p className={Styles.septext}>Sep 10, 2022 8:12 pm</p>
          </div>
          <div className={Styles.spacediv}>
            <div className={Styles.watchdiv}>
              <Image src={Location} alt="" />
              <p className={Styles.septext}>New York</p>
            </div>
            <div className={Styles.watchdiv}>
              <Image src={Eye} alt="" />
              <p className={Styles.septext}>3 Views</p>
            </div>
            <div className={Styles.watchdiv}>
              <Image src={Like} alt="" />
              <p className={Styles.septext}>25 Likes</p>
            </div>
          </div>
          <div className={Styles.watchdiv}>
            <p className={Styles.share}>Share:</p>
            <div className={Styles.flexrow}>
              <Image src={Twitter} alt="abc" />
              <Image src={Facebook} alt="abc" />
              <Image src={Linkdin} alt="abc" />
              <Image src={Instgram} alt="abc" />
              <Image src={Mess} alt="abc" />
            </div>
          </div>
        </div>
        <div>
          <TabOfServiceDetails data={data} />
        </div>
        <div className={Styles.btnsdiv}>
          {data?.tags?.map((tag, index) => (
            <button key={index} className={Styles.btns}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftServiceDetail;
