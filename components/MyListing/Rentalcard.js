import React, { useState, useEffect } from "react";
import { Card, Col, Row, Tag, message } from "antd";
import Styles from "../../styles/servicecard.module.css";
import Switch from "./Switch";
import { rentalForm } from "@/helper/axios";

function RentalCard() {
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
  const getRentalForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    rentalForm({
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
    getRentalForm();
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
                    <button className={Styles.btnconst}>{item.company}</button>
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
                  <p className={Styles.det}>{item.metaDescription}</p>

                  <div className={Styles.stat}>
                    <p>Status:</p>
                    <Tag
                      style={{
                        backgroundColor: item.status ? "#DEF5D3" : "#FFF7D8",
                        color: item.status ? "#42B00F" : "#ffab00",
                      }}
                    >
                      {item.status ? "Approved" : "Deny"}
                    </Tag>
                    <button className={Styles.btncompp}>
                      {item.priceType}
                    </button>
                  </div>
                  <Row className={Styles.rowlast}>
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
                      <p>Available/Rented</p>
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

export default RentalCard;
