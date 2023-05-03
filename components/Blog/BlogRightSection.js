import React from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import Image from "next/image";
// import Bottle from "../../public/images/Rectangle 45.png";
import Rectangle from "../../public/images/Rectangle 75.png";
import { Col, Input, Row, Select, Card } from "antd";
import FeaturedNews from "../News/FeaturedNews";
import card from "../../card.json";
const { Meta } = Card;
function BlogRightSection() {
  return (
    <div>
      <Row justify="space-evenly">
        {card.map(() => (
          <Col lg={12}>
            <Card
              hoverable
              style={{
                width: 285,
              }}
              cover={<Image src={Rectangle} />}
            >
              <div>
                <p className={Styles.textsmall}>Culture - 2 Hours ago </p>
                <p className={Styles.inttext}>
                  Interview Question: Why Dont You
                  <br /> Have a Degree?
                </p>
                <p className={Styles.prtext}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-consectetur
                </p>
                <button className={Styles.morebtn}>Read More</button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogRightSection;
