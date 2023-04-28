import React from "react";
import Styles from "../../styles/MemberTwoRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Sky from "../../public/images/image 15 (1).png";
import Profile22 from "../../public/images/Ellipse 247.png";
import Facebook from "../../public/images/Icon (1).png";
import Twitter from "../../public/images/Icon.png";
import Instgram from "../../public/images/Group 131.png";
import Linkdin from "../../public/images/Group 132.png";
import dataOne from "../../dataOne.json";
import PLus from "../../public/images/Plus.png";
import Mail from "../../public/images/Email.png";
import { Select, Row, Col, Tabs } from "antd";
import Post from "../post";
import Profile from "../Profile";

const { TabPane } = Tabs;

const { Option } = Select;
function MemberTwoRightSection() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} />
        <Image className={Styles.imgsize} src={Shoes} />
      </div>
      <div className={Styles.skydiv}>
        <div>
          <Image src={Sky} className={Styles.skying} />
        </div>
        <div className={Styles.facdiv}>
          <Image src={Profile22} className={Styles.topimg} />
          <div className={Styles.linkdivbox}>
            <p>Istiaq Firoz</p>
            <div className={Styles.flexrow}>
              <div className={Styles.circle}>
                <Image src={Twitter} />
              </div>
              <div className={Styles.circle}>
                <Image src={Facebook} />
              </div>
              <Image src={Instgram} />
              <Image src={Linkdin} />
            </div>
            <div className={Styles.betweendiv}>
              <p>
                5 <a className={Styles.atext}>Follower</a>
              </p>
              <p>
                14 <a className={Styles.atext}>Following</a>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.flexend}>
          <div className={Styles.betweendiv22}>
            <div className={Styles.flexboxloc1}>
              <Image src={PLus} /> <p className={Styles.foltext}> Follow</p>
            </div>
            <div className={Styles.flexboxloc1}>
              <Image src={Mail} />
              <p className={Styles.foltext}>Email</p>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ padding: "1rem" }}
      >
        <TabPane tab="Post" key="1">
          {dataOne.map(() => (
            <div>
              <Post />
            </div>
          ))}
        </TabPane>
        <TabPane tab="Profile" key="2">
          <Profile />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MemberTwoRightSection;
