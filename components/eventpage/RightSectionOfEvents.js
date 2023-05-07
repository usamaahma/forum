import React from "react";
import Styles from "../../styles/RightSectionOfMember.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import { Select, Row, Col } from "antd";
import Carousel from "./carousel";
const { Option } = Select;
const data = [
  {
    name: "APR",
    subname: "April 14,2023 10:00PM- April 16,2023",
    nameOne: "Pohela Boisakh",
    nametwo: "Hilton Hotel, Jacksion Heights NY 10473",
    subnametwo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
  },
  {
    name: "APR",
    subname: "April 14,2023 10:00PM- April 16,2023",
    nameOne: "Pohela Boisakh",
    nametwo: "Hilton Hotel, Jacksion Heights NY 10473",
    subnametwo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
  },
  {
    name: "APR",
    subname: "April 14,2023 10:00PM- April 16,2023",
    nameOne: "Pohela Boisakh",
    nametwo: "Hilton Hotel, Jacksion Heights NY 10473",
    subnametwo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
  },
];

function RightSectionOfEvents() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
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
      <Row style={{ marginTop: "3rem", padding: "1rem" }}>
        {data.map((user, index) => (
          <Col key={index}>
            <div className={Styles.postdiv} key={index}>
              <Row justify="start" className={Styles.rowresponsive}>
                <Col>
                  <img
                    src="../images/pehlikarahi.png"
                    alt="abc"
                    className={Styles.pehlikarahi}
                  ></img>
                </Col>
                <Col className={Styles.coltwo}>
                  <div>
                    <div className={Styles.datess}>
                      <img src="../images/Calendar 2.png" alt="abc"></img>
                      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                        14
                      </p>
                      <p className={Styles.datess5}> {user.name}</p>
                    </div>
                    <div className={Styles.liness}></div>
                    <div className={Styles.datess55}>{user.subname}</div>
                    <div className={Styles.nameonee}> {user.nameOne}</div>
                    <div className={Styles.datess}>
                      <img src="../images/locationone.png" alt="abc"></img>
                      {user.nametwo}
                    </div>
                  </div>
                </Col>
              </Row>
              <div>
                <p className={Styles.frst}>
                  {user.subnametwo}
                  <span style={{ color: "rgb(45,156,219)" }}>Read More..</span>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ padding: "1rem" }}>
        <div>
          <p className={Styles.eventsss}>Others Events</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 1,
              width: "7rem",
              border: "#42b00f 1px solid",
            }}
          ></div>
          <hr />
        </div>
        <div className={Styles.Carousel}>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default RightSectionOfEvents;
