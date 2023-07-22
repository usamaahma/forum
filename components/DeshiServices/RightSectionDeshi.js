import React from "react";
import Styles from "../../styles/RightSectionDeshi.module.css";
import { Col, Row } from "antd";
import DeshiProductCard from "./DeshiProductCard";
import Image from "next/image";
import Pic from "../../public/images/image 77 (1).png";
import Ser from "../../public/images/Rectangle 4653 (1).png";
import Ser1 from "../../public/images/Rectangle 4654 (1).png";
import Ser2 from "../../public/images/Rectangle 4655 (1).png";
import CarouselDeshi from "./CarouselDeshi";
import Link from "next/link";
const data = [
  { key: 1, name: "card" },
  { key: 2, name: "card" },
  { key: 3, name: "card" },
  { key: 4, name: "card" },
  { key: 5, name: "card" },
  { key: 6, name: "card" },
  { key: 7, name: "card" },
  { key: 8, name: "card" },
  { key: 9, name: "card" },
];
function RightSectionDeshi() {
  return (
    <div>
      <div className={Styles.enddiv}>
        <p className={Styles.poptext}>Popular Services</p>
        <Link href="./DeshiServiceDetailPage">
          <p className={Styles.vewtext}>View all</p>
        </Link>
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
            <Col key={index} xxl={8} xl={8} lg={8} md={8} xs={12}>
              <div className={Styles.centercard}>
                <Link href="./DeshiServiceDetailPage">
                  {" "}
                  <DeshiProductCard />{" "}
                </Link>
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
              <Col key={index} xxl={8} xl={8} lg={8} md={8} xs={12}>
                <div className={Styles.centercard}>
                  <Link href="./DeshiServiceDetailPage">
                    {" "}
                    <DeshiProductCard />{" "}
                  </Link>
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
            <CarouselDeshi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSectionDeshi;
