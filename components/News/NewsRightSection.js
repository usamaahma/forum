import React from "react";
import Styles from "../../styles/NewsRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Group from "../../public/images/Group 48095692.png";
import { Input, Select } from "antd";
import FeaturedNews from "./FeaturedNews";
import Green from "../../public/images/Rectangle 4636.png";
const { Option } = Select;
function NewsRightSection() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.feadiv}>
        {/* <div className={Styles.boxgreen}>
          <Image
            style={{ width: "10rem", height: "5rem" }}
            src={Group}
            alt=""
          />
          <div>
            <p className={Styles.parh}>
              Lorem Ipsum is simply dummy text of the printing and types Lorem
              Ipsum is simply dummy text of the printing
            </p>
          </div>
        </div> */}
        <div>
          <p style={{ color: "#151515", fontWeight: "600" }}>Featured News</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 1,
              width: "6rem",
              border: "#42b00f 1px solid",
              position: "absolute",
            }}
          ></div>
          <hr
            style={{
              border: "solid 1px #D9D9D9",
            }}
          />
          <FeaturedNews />
        </div>
      </div>
    </div>
  );
}

export default NewsRightSection;
