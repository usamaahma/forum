import React from "react";
import Styles from "../styles/RightSection.module.css";
import Image from "next/image";
import Bottle from "../public/images/Rectangle 45.png";
import Shoes from "../public/images/Rectangle 46 (1).png";
import Profile from "../public/images/Ellipse 9.png";
import Camera from "../public/images/Camera.png";
import File from "../public/images/File_dock_add.png";
import Arrowdown from "../public/images/Mask group (2).png";
import Locatin from "../public/images/Loc.png";
import dataOne from "../dataOne.json";
import { Input, Select } from "antd";
import Post from "./post";
import Link from "next/link";

const { Option } = Select;
function RightSection() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
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
          <Image src={Profile} alt="abc" />
          <Input
            placeholder="Share What’s on your mind....."
            className={Styles.input}
          />
        </div>
        <div className={Styles.cameradiv}>
          <div>
            <Image src={Camera} alt="abc" style={{ marginLeft: ".4rem" }} />
            <Image src={File} alt="abc" style={{ marginLeft: ".4rem" }} />
            <Image
              src={Locatin}
              alt="abc"
              style={{ width: "1.5rem", height: "1.4rem", marginLeft: ".4rem" }}
            />
          </div>
          <div className={Styles.post}>
            <p>Post</p>
          </div>
        </div>
      </div>

      <div className={Styles.threebtn}>
        <Link href="/landingPage">
          <button className={Styles.btngree}>Post</button>
        </Link>
        <Link href="/TopicPage">
          <button className={Styles.btngree}>Topic</button>
        </Link>
        <Link href="/membersPage">
          <button className={Styles.btngree}>Member</button>
        </Link>
      </div>
      <div className={Styles.postdiv}>
        <p className={Styles.clr}> All Post</p>
        <div>
          <Image src={Arrowdown} alt="abc" />
        </div>
      </div>
      {dataOne.map((index) => (
        <div key={index}>
          <Post />
        </div>
      ))}
    </div>
  );
}

export default RightSection;
