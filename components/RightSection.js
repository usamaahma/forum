import React from "react";
import Styles from "../styles/RightSection.module.css";
import Image from "next/image";
import Bottle from "../public/images/Rectangle 45.png";
import Shoes from "../public/images/Rectangle 46 (1).png";
import Profile from "../public/images/Ellipse 9.png";
import Camera from "../public/images/Camera.png";
import File from "../public/images/File_dock_add.png";
import Arrowdown from "../public/images/Mask group (2).png";
import dataOne from "../dataOne.json";
import { Input, Select } from "antd";
import Post from "./post";

const { Option } = Select;
function RightSection() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} />
        <Image className={Styles.imgsize} src={Shoes} />
      </div>
      <div className={Styles.flexbigbox}>
        <div className={Styles.flexbox}>
          <p className={Styles.clr}>Post</p>
          <div>
            <Select
              defaultValue="Topic"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="Topic">Topic</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        </div>
        <hr className={Styles.line} />
        <div className={Styles.inputdiv}>
          <Image src={Profile} />
          <Input
            placeholder="Share What’s on your mind....."
            className={Styles.input}
          />
        </div>
        <div className={Styles.cameradiv}>
          <div>
            <Image src={Camera} />
            <Image src={File} />
          </div>
          <div className={Styles.post}>
            <p>Post</p>
          </div>
        </div>
      </div>
      <div className={Styles.postdiv}>
        <p className={Styles.clr}> All Post</p>
        <div>
          <Image src={Arrowdown} />
        </div>
      </div>
      {dataOne.map(() => (
        <div>
          <Post />
        </div>
      ))}
    </div>
  );
}

export default RightSection;
