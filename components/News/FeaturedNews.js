import React from "react";
import Styles from "../../styles/FeaturedNews.module.css";
import Business from "../../public/images/Rectangle 4640.png";
import { Col, Collapse, Row } from "antd";
import Image from "next/image";
import FeaturedPost from "./FeaturedPost";
import dataOne from "../../dataOne.json";
import dataTwo from "../../dataTwo.json";
import CommunityNews from "./CommunityNews";
import NewsCarousel from "./NewsCarouel";
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
              <Row justify="center">
                {dataOne.map(() => (
                  <Col>
                    <FeaturedPost />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Community News</p>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
        {dataOne.map(() => (
          <CommunityNews />
        ))}
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Other News</p>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
        <div className={Styles.btnflex}>
          <button className={Styles.btn}>Politics</button>
          <button className={Styles.btn}>Business</button>
          <button className={Styles.btn}>Entertainment</button>
          <button className={Styles.btn}>Bangladesh</button>
          <button className={Styles.btn}>World</button>
          <button className={Styles.btn}>Game</button>
        </div>
        {/* <Row justify="space-evenly">
          {dataTwo.map(() => (
            <Col>
              <div className={Styles.centercol1}>
                <FeaturedPost />
              </div>
            </Col>
          ))}
        </Row> */}
      </div>
      <div className={Styles.cardivvv}>
        <NewsCarousel />
      </div>
    </div>
  );
}

export default FeaturedNews;
