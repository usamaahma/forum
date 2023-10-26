import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tag, message } from "antd";
import Styles from "../../styles/servicecard.module.css";
import Switch from "./Switch";
import { jobForm } from "@/helper/axios";

function JobCard() {
  const [hovered, setHovered] = useState(false);
  // const router = useRouter();
  const [data, setData] = useState();
  const [loading, setloading] = useState();

  //////

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  ///////////////////////////api
  const getJobForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    jobForm({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        setData(res.data.results);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  useEffect(() => {
    getJobForm();
  }, []);
  return (
    <div>
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <Card bordered={false}>
              <Row className={Styles.gapro}>
                <Col>
                  {" "}
                  <img
                    src={item.image?.[0]}
                    alt="abc"
                    width={150}
                    height={150}
                  />
                </Col>
                <Col>
                  <div className={Styles.butico}>
                    <button className={Styles.btnconst}>federal</button>
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
                    <p className={Styles.nam}>{item.title}</p>
                    <p className={Styles.pric}>{item.price}</p>
                  </div>
                  <p className={Styles.det}>{item.jobDescription}</p>
                  <div className={Styles.stat}>
                    <img alt="abc" src="../images/jobb.png" />
                    <p>{item.jobType}</p>
                  </div>
                  <div className={Styles.stat}>
                    <p>Status:</p>
                    <Tag
                      style={{
                        backgroundColor: item.status ? "#DEF5D3" : "#FFF7D8",
                        color: item.status ? "#42B00F" : "#ffab00",
                      }}
                    >
                      {item.status ? "Approved" : "Deny"}
                    </Tag>{" "}
                    <button className={Styles.btncompp}>
                      {item.jobPosition}
                    </button>
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
                        <p>{item.address}</p>{" "}
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
