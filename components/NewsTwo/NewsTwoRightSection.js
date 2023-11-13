import React from "react";
import Styles from "../../styles/NewsTwoRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Heart from "../../public/images/Frame 44373.png";
import Forward from "../../public/images/Frame 44375.png";
import Comments from "../../public/images/Frame 44373 (1).png";
import Ellipse from "../../public/images/Ellipse 207.png";
import { Input, Select } from "antd";
import FeaturedNews from "../News/FeaturedNews";
import Green from "../../public/images/Rectangle 4636.png";
import NewsPost from "./NewsPost";
import Group from "../../public/images/Group 48095692.png";

const { Option } = Select;
function NewsTwoRightSection({ data }) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.boxgreen}>
        <Image style={{ width: "10rem", height: "5rem" }} src={Group} alt="" />
        <marquee className={Styles.parh}>{data?.heading}</marquee>
      </div>
      <div className={Styles.paddiv}>
        <button className={Styles.btnnew}>{data.newsCategoryId}</button>
        <p className={Styles.howtext}>{data?.heading}</p>
      </div>
      <div className={Styles.mainimgelldiv}>
        <div className={Styles.elldiv}>
          <Image src={Ellipse} alt="abc" />
          <div className={Styles.textdiv}>
            <p style={{ color: "#444444", fontWeight: "500" }}>
              {data.authorName}
            </p>
            <p
              style={{ color: "#A1A1A1", fontWeight: "500", fontSize: ".7rem" }}
            >
              02 Jan 2023
            </p>
          </div>
        </div>
        <div className={Styles.commdiv}>
          <Image className={Styles.smllbox} src={Heart} alt="abc" />
          <Image className={Styles.smllbox} src={Forward} alt="abc" />
          <Image className={Styles.smllbox} src={Comments} alt="abc" />
          <p>50k</p>
        </div>
      </div>
      <div style={{ padding: ".5rem" }}>
        <NewsPost data={data} />
      </div>
    </div>
  );
}

export default NewsTwoRightSection;
