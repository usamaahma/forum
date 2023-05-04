import React from "react";
import Styles from "../../styles/RightSectionOfMember.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import card from "../../card.json";
import { Select, Row, Col } from "antd";

const { Option } = Select;
function RightSectionOfEvents() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} />
        <Image className={Styles.imgsize} src={Shoes} />
      </div>
      <div className={Styles.flexbigbox}>
        <div className={Styles.flexbox}>
          <div className={Styles.selectdiv}>
            <p className={Styles.clr}>Top Events</p>
          </div>
          <div className={Styles.selectdiv}>
            <p className={Styles.filter}>Filter :</p>
            <Select
              defaultValue="Last Active"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="Topic">Last Active</Option>
              <Option value="lucy">Last Active</Option>
            </Select>
          </div>
        </div>
      </div>
      <Row>
        {card.map((index) => (
          <Col key={index}>
            <div className={Styles.centercol}>abc</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RightSectionOfEvents;
