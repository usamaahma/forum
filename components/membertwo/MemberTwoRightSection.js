import React from "react";
import Styles from "../../styles/MemberTwoRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Sky from "../../public/images/image 15 (1).png";
import Profile22 from "../../public/images/Ellipse 247.png";
import Facebook from "../../public/images/faceb.png";
import Twitter from "../../public/images/twitter.png";
import Instgram from "../../public/images/insta.png";
import Linkdin from "../../public/images/linkdin.png";
import dataOne from "../../dataOne.json";
import PLus from "../../public/images/Plus1.png";
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
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.divpaddinng}>
        <div className={Styles.skydiv}>
          <div>
            <Image src={Sky} className={Styles.skying} alt="abc" />
          </div>
          <div className={Styles.facdiv}>
            <Image src={Profile22} className={Styles.topimg} alt="abc" />
            <div className={Styles.linkdivbox}>
              <p>Istiaq Firoz</p>
              <div className={Styles.flexrow}>
                <div className={Styles.circle}>
                  <Image src={Twitter} alt="abc" />
                </div>
                <div className={Styles.circle}>
                  <Image src={Facebook} alt="abc" />
                </div>
                <Image src={Instgram} alt="abc" />
                <Image src={Linkdin} alt="abc" />
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
                <Image src={PLus} alt="abc" />
                <p className={Styles.foltext}> Follow</p>
              </div>
              <div className={Styles.flexboxloc1}>
                <Image src={Mail} alt="abc" />
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
            {dataOne.map((index) => (
              <div key={index}>
                <Post />
              </div>
            ))}
          </TabPane>
          <TabPane tab="Profile" key="2">
            <Profile />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default MemberTwoRightSection;
