import React from "react";
import Styles from "../../styles/FeaturedNews.module.css";
import Business from "../../public/images/Rectangle 4640.png";
import { Col, Row } from "antd";
import Image from "next/image";
import FeaturedPost from "./FeaturedPost";
import dataOne from "../../dataOne.json";
function FeaturedNews() {
  return (
    <div>
      <div>
        <Row justify="space-evenly">
          <Col lg={16}>
            <div className={Styles.centercol}>
              <div>
                <Image className={Styles.imgstyle} src={Business} alt="abc" />
                <div className={Styles.boxpadding}>
                  <div className={Styles.flexbtndiv}>
                    <div>
                      <button className={Styles.btnbus}>Business </button>
                    </div>
                    <div>
                      <p className={Styles.jantext}>22 Jan, 2023</p>
                    </div>
                  </div>
                  <div>
                    <p className={Styles.intertext}>
                      Interview Question: Why Dont You Have Food?
                    </p>
                  </div>
                  <p className={Styles.lookingtext}>
                    I am Looking for a plumber for my house anybody
                    <br /> can.am Looking for a plumber for my house anybody
                    <br /> can. am Looking for a plumber for my house anybody
                    <br /> can.am Looking for a plumber house.
                    <a className={Styles.blueclr}>Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className={Styles.centercol1}>
              {dataOne.map(() => (
                <FeaturedPost />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FeaturedNews;
