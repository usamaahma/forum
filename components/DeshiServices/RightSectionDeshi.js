import React from "react";
import Styles from "../../styles/RightSectionDeshi.module.css";
import { Col, Row } from "antd";
import DeshiProductCard from "./DeshiProductCard";
import Image from "next/image";
import Pic from "../../public/images/image 77 (1).png";
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
function RightSectionDeshi() {
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
                <DeshiProductCard />
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
                  <DeshiProductCard />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default RightSectionDeshi;
