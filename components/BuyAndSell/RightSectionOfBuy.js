import React from "react";
import Styles from "../../styles/RightSectionOfBuy.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import Pic from "../../public/images/image 77 (1).png";
import Ser from "../../public/images/Rectangle 4653 (1).png";
import Ser1 from "../../public/images/Rectangle 4654 (1).png";
import Ser2 from "../../public/images/Rectangle 4655 (1).png";
import BuyProductCard from "./BuyProductCard";
import CarouselOfBuy from "./CrouselOfBuy";
const data = [
  { key: 1, name: "card" },
  { key: 2, name: "card" },
  { key: 3, name: "card" },
  { key: 4, name: "card" },
  { key: 5, name: "card" },
  { key: 6, name: "card" },
  { key: 7, name: "card" },
  { key: 8, name: "card" },
];
function RightSectionOfBuy() {
  return (
    <div>
      <div className={Styles.enddiv}>
        <p className={Styles.poptext}>Popular Services</p>
        <p className={Styles.vewtext}>View all</p>
      </div>
      <div
        style={{
          backgroundColor: "#42b00f",
          borderWidth: 1,
          width: "10rem",
          border: "#42b00f 2px solid",
          position: "absolute",
        }}
      ></div>
      <hr />
      <div>
        <br />
        <Row justify="center" className={Styles.colsize}>
          {data.map((index) => (
            <Col key={index} xxl={6} xl={6} lg={8} md={8} xs={12}>
              <div className={Styles.centercard}>
                <BuyProductCard />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Image src={Pic} alt="" className={Styles.imsizebig} />
      </div>
      <div>
        <div className={Styles.enddiv}>
          <p className={Styles.poptext}>Recently Added</p>
          <p className={Styles.vewtext}>View all</p>
        </div>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "10rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <div>
          <br />
          <Row justify="center" className={Styles.colsize}>
            {data.map((index) => (
              <Col key={index} xxl={6} xl={6} lg={8} md={8} xs={12}>
                <div className={Styles.centercard}>
                  <BuyProductCard />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <br />
      <Row justify="center" className={Styles.row}>
        <Col>
          <div className={Styles.centercard}>
            <Image src={Ser} alt="" className={Styles.bigimgh} />
          </div>
        </Col>
        <Col>
          <div className={Styles.centercard12}>
            <Image src={Ser1} alt="" className={Styles.smallimgh} />
            <Image src={Ser2} alt="" className={Styles.smallimgh} />
          </div>
        </Col>
      </Row>
      <div>
        <div className={Styles.enddiv}>
          <p className={Styles.poptext}>Featured Services</p>
        </div>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "10rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <div className={Styles.centercar}>
          <div className={Styles.widthofcar}>
            <CarouselOfBuy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSectionOfBuy;
