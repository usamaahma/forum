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
import Folwer from "../../public/images/Group (4).png";
import Folwer1 from "../../public/images/Group (5).png";
import Link from "next/link";
const data = [
  {
    id: 1,
    image: (
      <Link href="/DeshiShopPage">
        <Image src={Deshi} alt="" className={Styles.img} />
      </Link>
    ),
    detail: "Deshi Shop",
  },
  {
    id: 2,
    image: (
      <Link href="/DeshiServicePage">
        <Image src={Service} alt="" className={Styles.img} />
      </Link>
    ),
    detail: "Deshi Service",
  },
  {
    id: 3,
    image: (
      <Link href="/BuyAndSellPage">
        <Image src={Buy} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Buy & Sell",
  },
  {
    id: 4,
    image: (
      <Link href="/RentalPage">
        <Image src={Rental} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Rental",
  },
  {
    id: 5,
    image: (
      <Link href="/JobPage">
        <Image src={Job} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Job",
  },
  {
    id: 6,
    image: (
      <Link href="/NewsPage">
        <Image src={News} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "News",
  },
  {
    id: 7,
    image: (
      <Link href="/events">
        <Image src={Event} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Event",
  },
  {
    id: 8,
    image: (
      <Link href="/landingPage">
        <Image src={Forum} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Forum",
  },
  {
    id: 9,
    image: (
      <Link href="/BlogPage">
        <Image src={Blog} alt="" className={Styles.img} />{" "}
      </Link>
    ),
    detail: "Blog",
  },
];
function FirstSectionHome() {
  return (
    <div className={Styles.bgboxx}>
      <Image src={Folwer} alt="" className={Styles.flo} />
      <Image src={Folwer1} alt="" className={Styles.flo1} />
      <div>
        <Row justify="center" className={Styles.widthh}>
          {data.map((item, index) => (
            <Col key={index} xxl={8} xl={8} lg={7} md={7} xs={24}>
              <div className={Styles.boxcenter}>
                <div className={Styles.boxx}>
                  <div>{item.image}</div>
                  <p className={Styles.texts}>{item.detail}</p>
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
