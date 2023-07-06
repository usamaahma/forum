import React from "react";
import Styles from "../../styles/FirstSectionHome.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import Deshi from "../../public/images/Deshi Shop.png";
import Service from "../../public/images/2 119.png";
import Buy from "../../public/images/13.png";
import Rental from "../../public/images/Group 285.png";
import Job from "../../public/images/232.png";
import News from "../../public/images/Frame.png";
import Event from "../../public/images/Group (6).png";
import Forum from "../../public/images/Group (7).png";
import Blog from "../../public/images/Blogpost.png";
const data = [
  {
    id: 1,
    image: <Image src={Deshi} alt="" />,
    detail: "Deshi Shop",
  },
  {
    id: 2,
    image: <Image src={Service} alt="" />,
    detail: "Deshi Service",
  },
  {
    id: 3,
    image: <Image src={Buy} alt="" />,
    detail: "Buy & Sell",
  },
  {
    id: 4,
    image: <Image src={Rental} alt="" />,
    detail: "Rental",
  },
  {
    id: 5,
    image: <Image src={Job} alt="" />,
    detail: "Job",
  },
  {
    id: 6,
    image: <Image src={News} alt="" />,
    detail: "News",
  },
  {
    id: 7,
    image: <Image src={Event} alt="" />,
    detail: "Event",
  },
  {
    id: 8,
    image: <Image src={Forum} alt="" />,
    detail: "Forum",
  },
  {
    id: 9,
    image: <Image src={Blog} alt="" />,
    detail: "Blog",
  },
];
function FirstSectionHome() {
  return (
    <div className={Styles.bgboxx}>
      <div>
        <Row justify="center" className={Styles.widthh}>
          {data.map((item, index) => (
            <Col key={index} xxl={8} xl={8} lg={7} md={7} xs={24}>
              <div className={Styles.boxcenter}>
                <div className={Styles.boxx}>
                  <div>{item.image}</div>
                  <p>{item.detail}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default FirstSectionHome;
