import React from "react";
import Styles from "../../styles/DeshiShopPageTwoRight.module.css";
import CarouselDeshitwo from "./Carouseldeshitwo";
import { Row, Col, Tabs } from "antd";
import PopularStore from "./PopularStore";
import SimilarProduct from "./SimilarProduct";
import Link from "next/link";
import TabOfSimliar from "./TabOfSimliar";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Men`,
    children: <SimilarProduct />,
  },
  {
    key: "2",
    label: `Women`,
    children: <SimilarProduct />,
  },
];

function RightSectionDeshiTwo() {
  return (
    <div>
      <div className={Styles.imagethirrt}>
        <img
          className={Styles.imagethirt}
          alt="abc"
          src="../images/thirtyoff.png"
        />
      </div>
      <div>
        <div className={Styles.nonedrawer}>
          <img alt="abc" src="../images/Categorymbl.png" />
          <img alt="abc" src="../images/Frame 44157.png" />
        </div>
      </div>
      <div className={Styles.divfontv}>
        <p className={Styles.Populartxt}>Popular Products</p>
        <a className={Styles.viwall}>View All</a>
      </div>
      <div className={Styles.blackline}>
        <img
          className={Styles.greenlines}
          alt="abc"
          src="../images/greenline.png"
        />
      </div>
      <div className={Styles.CarouselDeshitwowidth}>
        <Link href="/ProductDetailsPage">
          <CarouselDeshitwo />
        </Link>
      </div>
      <div className={Styles.CarouselDeshitwowidth}>
        <CarouselDeshitwo />
      </div>
      <div className={Styles.twoimgeswonder}>
        <img
          className={Styles.imgeswonder}
          alt="abc"
          src="../images/wonderful.png"
        ></img>
        <img
          className={Styles.imgeswonder}
          alt="abc"
          src="../images/2040.png"
        ></img>
      </div>
      <div>
        <Row className={Styles.imagesdeshitwo}>
          <Col className={Styles.colfirstimg}>
            {" "}
            <img
              className={Styles.imgestowels}
              alt="abc"
              src="../images/target.png"
            ></img>{" "}
            <img
              className={Styles.imgestowels}
              alt="abc"
              src="../images/bedroom.png"
            ></img>
          </Col>
          <Col>
            {" "}
            <img
              className={Styles.imgesstudio}
              alt="abc"
              src="../images/studio.png"
            ></img>
          </Col>
          <Col className={Styles.colfirstimg}>
            {" "}
            <img
              className={Styles.imgestowels}
              alt="abc"
              src="../images/towel.png"
            ></img>{" "}
            <img
              className={Styles.imgestowels}
              alt="abc"
              src="../images/target.png"
            ></img>
          </Col>
        </Row>
      </div>
      <div>
        <div className={Styles.divfontv}>
          <p className={Styles.Populartxt}>Recent Products</p>
          <a className={Styles.viwall}>View All</a>
        </div>
        <div className={Styles.blackline}>
          {" "}
          <img
            className={Styles.greenlines}
            alt="abc"
            src="../images/greenline.png"
          />
        </div>
        <div className={Styles.CarouselDeshitwowidth}>
          <CarouselDeshitwo />
        </div>
        <div className={Styles.CarouselDeshitwowidth}>
          <CarouselDeshitwo />
        </div>
      </div>
      <div>
        <div className={Styles.divfontv}>
          <p className={Styles.Populartxt}>Popular Store Name</p>
          <a className={Styles.viwall}>View All</a>
        </div>
        <div className={Styles.blackline}>
          {" "}
          <img
            className={Styles.greenliness}
            alt="abc"
            src="../images/greenline.png"
          />
        </div>
        <PopularStore />
        <TabOfSimliar />
      </div>
    </div>
  );
}

export default RightSectionDeshiTwo;
