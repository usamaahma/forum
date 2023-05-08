import React from "react";
import Styles from "../styles/RightSectionOfTopic.module.css";
import Image from "next/image";
import Bottle from "../public/images/Rectangle 45.png";
import Shoes from "../public/images/Rectangle 46 (1).png";
import Profile from "../public/images/Ellipse 9.png";
import Camera from "../public/images/Camera.png";
import File from "../public/images/File_dock_add.png";
import { Input, Select } from "antd";
import Link from "next/link";

const data = [
  {
    name: "Jobs",
    subname: "Job related post..",
    nameOne: "56",
    nametwo: "Istiaq Firoz",
    subnametwo: "1 Year, 5 Month ago",
  },
  {
    name: "Jobs",
    subname: "Job related post..",
    nameOne: "56",
    nametwo: "Istiaq Firoz",
    subnametwo: "1 Year, 5 Month ago",
  },
  {
    name: "Jobs",
    subname: "Job related post..",
    nameOne: "56",
    nametwo: "Istiaq Firoz",
    subnametwo: "1 Year, 5 Month ago",
  },
  {
    name: "Jobs",
    subname: "Job related post..",
    nameOne: "56",
    nametwo: "Istiaq Firoz",
    subnametwo: "1 Year, 5 Month ago",
  },
  {
    name: "Jobs",
    subname: "Job related post..",
    nameOne: "56",
    nametwo: "Istiaq Firoz",
    subnametwo: "1 Year, 5 Month ago",
  },
];
const { Option } = Select;
function RightSectionOfTopic() {
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
            <Image src={Camera} alt="abc" />
            <Image src={File} alt="abc" />
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
        <p className={Styles.clr}>Topic</p>
        <div>Post</div>
        <div>Latest Post</div>
      </div>
      {data.map((user, index) => (
        <div className={Styles.postdiv} key={index}>
          <div>
            <p className={Styles.clr}>{user.name}</p>
            <p className={Styles.clr12}>{user.subname}</p>
          </div>
          <div>
            <p className={Styles.clr}>{user.nameOne}</p>
          </div>
          <div>
            <p className={Styles.clr}>{user.nametwo}</p>
            <p className={Styles.clr12}>{user.subnametwo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightSectionOfTopic;
