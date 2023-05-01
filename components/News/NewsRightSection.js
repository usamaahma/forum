import React from "react";
import Styles from "../../styles/NewsRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
// import Rectangle from "../../public/images/Rectangle 4636.png";
// import Profile from "../public/images/Ellipse 9.png";
// import Camera from "../public/images/Camera.png";
// import File from "../public/images/File_dock_add.png";
// import Arrowdown from "../public/images/Mask group (2).png";
// import dataOne from "../dataOne.json";
import { Input, Select } from "antd";
import FeaturedNews from "./FeaturedNews";
// import Post from "./post";

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
      {/* <div>
        <Image src={Rectangle} alt="abc" />
      </div> */}
      <div>
        <p>Featured News</p>
        <hr />
        <FeaturedNews />
      </div>
      {/* {dataOne.map((index) => (
        <div key={index}>
          <Post />
        </div>
      ))} */}
    </div>
  );
}

export default NewsRightSection;
