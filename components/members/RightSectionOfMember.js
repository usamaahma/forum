import React from "react";
import Styles from "../../styles/RightSectionOfMember.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Profile from "../../public/images/Ellipse 9.png";
import Union from "../../public/images/Union.png";
import Camera from "../../public/images/Camera.png";
import File from "../../public/images/File_dock_add.png";
import card from "../../card.json";
import { Select, Row, Col, Input } from "antd";
import MemberCard from "./MemberCard";
import Link from "next/link";

const { Option } = Select;
function RightSectionOfMember() {
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
      <div className={Styles.flexbigbox}>
        <div className={Styles.flexbox}>
          <div className={Styles.selectdiv}>
            <Image src={Union} alt="abc" />
            <p className={Styles.clr}>
              <a className={Styles.clr1}>100</a> All Member
            </p>
          </div>
          <div className={Styles.selectdiv}>
            <p className={Styles.filter}>Filter :</p>
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
      </div>
      <Row justify="space-evenly">
        {card.map((index) => (
          <Col key={index}>
            <div className={Styles.centercol}>
              <MemberCard />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RightSectionOfMember;
