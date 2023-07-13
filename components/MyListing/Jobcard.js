import React from "react";
import { Card, Col, Row } from "antd";
import Styles from "../../styles/servicecard.module.css";
import Switch from "./Switch";

const data = [
  {
    key: "1",
    image: (
      <img
        className={Styles.imgmaincard}
        alt="abc"
        src="../images/jobcard.png"
      />
    ),
    company: "Federal",
    price: "27$",
    name: "Software Development Engineer..",
    detail: "Design Communication Studio",
    status: "pending",
    status1: "Hourly",
    timing: "Full Time",

    time: "1 Hour",
    place: "New York",
    views: "3",
  },
  {
    key: "2",
    image: (
      <img
        className={Styles.imgmaincard}
        alt="abc"
        src="../images/jobcard.png"
      />
    ),
    company: "Federal",
    price: "27$",
    name: "Software Development Engineer..",
    detail: "Design Communication Studio",
    status: "pending",
    status1: "Hourly",
    timing: "Full Time",
    time: "1 Hour",
    place: "New York",
    views: "3",
  },
  {
    key: "3",
    image: (
      <img
        className={Styles.imgmaincard}
        alt="abc"
        src="../images/jobcard.png"
      />
    ),
    company: "Federal",
    price: "27$",
    name: "Software Development Engineer..",
    detail: "Design Communication Studio",
    status: "pending",
    status1: "Hourly",
    timing: "Full Time",
    time: "1 Hour",
    place: "New York",
    views: "3",
  },
];

function JobCard() {
  return (
    <div>
      <div>
        {data.map((data, index) => (
          <div key={index}>
            <Card bordered={false}>
              <Row className={Styles.gapro}>
                <Col>{data.image}</Col>
                <Col>
                  <div className={Styles.butico}>
                    <button className={Styles.btnconst}>{data.company}</button>
                    <div className={Styles.gapro}>
                      <img
                        className={Styles.imgs}
                        alt="abc"
                        src="../images/Edit.png"
                      />
                      <img
                        className={Styles.imgs}
                        alt="abc"
                        src="../images/Delete.png"
                      />
                    </div>
                  </div>
                  <div className={Styles.seconddiv}>
                    <p className={Styles.nam}>{data.name}</p>
                    <p className={Styles.pric}>{data.price}</p>
                  </div>
                  <p className={Styles.det}>{data.detail}</p>
                  <div className={Styles.stat}>
                    <img alt="abc" src="../images/jobb.png" />
                    <p>{data.timing}</p>
                  </div>
                  <div className={Styles.stat}>
                    <p>Status:</p>
                    <button className={Styles.btncomp}>{data.status}</button>
                    <button className={Styles.btncompp}>{data.status1}</button>
                  </div>
                  <Row className={Styles.rowlastt}>
                    <Col className={Styles.collstw}>
                      {" "}
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/watch.png"
                        />{" "}
                        <p>{data.time}</p>{" "}
                      </div>
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/locationone.png"
                        />{" "}
                        <p>{data.place}</p>{" "}
                      </div>
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/Eye3.png"
                        />{" "}
                        <p>{data.views} Views</p>{" "}
                      </div>
                    </Col>
                    <Col className={Styles.availbleswitch}>
                      <p>Time left Mark On/Off</p>
                      <Switch />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
