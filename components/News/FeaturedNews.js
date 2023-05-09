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
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Politics</button>
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Business</button>
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Entertainment</button>
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Bangladesh</button>
  </div>,
  <div
    key={5}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>World</button>
  </div>,
  <div
    key={6}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Game</button>
  </div>,
];
const responsive = {
  0: {
    items: 2,
  },
  558: {
    items: 4,
  },
  1024: {
    items: 4,
  },
  1440: {
    items: 4,
  },
  2560: {
    items: 5,
  },
};
function FeaturedNews() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col lg={12}>
            <div className={Styles.centercol}>
              <div>
                <Image className={Styles.imgstyle22} src={Business} alt="abc" />
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
          <Col lg={10}>
            {dataOne.map((index) => (
              <div key={index} className={Styles.centercol1}>
                <FeaturedPost />
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Community News</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "7.1rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
          }}
        />
        {dataOne.map((index) => (
          <CommunityNews key={index} />
        ))}
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Other News</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "4.8rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
          }}
        />
        <div
          className={Styles.centerrrr}
          style={{
            marginTop: ".5rem",
            marginBottom: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={Styles.btnflex}>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableDotsControls
              disableButtonsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
              infinite
            />
          </div>
        </div>
      </div>
      <div
        className={Styles.centerrrr}
        style={{
          marginTop: ".5rem",
          marginBottom: ".5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={Styles.cardivvv}>
          <Link href="/NewsPageTwo">
            <NewsCarousel />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
