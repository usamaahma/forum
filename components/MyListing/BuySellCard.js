import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import Styles from "../../styles/servicecard.module.css";
import Switch from "./Switch";
import { buySellForm } from "@/helper/axios";

//

function BuySellCard() {
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
  const getBuySellForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    buySellForm({
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
    getBuySellForm();
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
                    <button className={Styles.btnconst}>{item.tit}</button>
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
                  <p className={Styles.det}>{item.serviceDescription}</p>
                  <div className={Styles.stat}>
                    <img alt="abc" src="../images/homedelivery.png" />
                    <p>Pickup from door</p>
                  </div>
                  <div className={Styles.stat}>
                    <p>Status:</p>
                    <button className={Styles.btncomp}>pending</button>
                    <button className={Styles.btncompp}>{data.status1}</button>
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
                      <p>Available/Sold</p>
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

export default BuySellCard;
