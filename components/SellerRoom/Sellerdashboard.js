import React from "react";
import { Card, Row, Col, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import BarChartComponent from "./Greenbarchart.js";

import Styles from "../../styles/Sellerdashboard.module.css";

const items = [
  {
    key: "1",
    label: <p style={{ fontSize: "1.5rem" }}>$5900</p>,
  },
];

const data = [
  {
    Key: "1",
    Sales: "$5900",
    Earning: "$3699",
    Order: "$100",
    Pageview: "$5900",
  },
];
const dataa = [
  {
    Total: "20",
    Completed: "30",
    Pending: "10",
    Processing: "50",
    Cancelled: "0",
    Refunded: "0",
    hold: "0",
  },
];
const productdata = [
  {
    Total: "20",
    Live: "30",
    Offline: "10",
    Pending: "50",
  },
];

function Sellerdashboard() {
  return (
    <div>
      {data.map((data, index) => (
        <Row key={index} className={Styles.cards}>
          <Col>
            <Card
              bordered={false}
              style={{
                width: 200,
              }}
            >
              <p className={Styles.saletxt}>Sales</p>
              <p className={Styles.other}>{data.Sales}</p>
            </Card>
          </Col>
          <Col>
            <Card
              bordered={false}
              style={{
                width: 200,
              }}
            >
              <p className={Styles.saletxt}>Earning</p>
              <p className={Styles.other}>{data.Earning}</p>
            </Card>{" "}
          </Col>
          <Col>
            {" "}
            <Card
              bordered={false}
              style={{
                width: 200,
              }}
            >
              <p className={Styles.saletxt}>Orders</p>
              <p className={Styles.other}>{data.Order}</p>
            </Card>{" "}
          </Col>

          <Col>
            <Card
              bordered={false}
              style={{
                width: 200,
              }}
            >
              <p className={Styles.saletxt}>Pageview</p>
              <p className={Styles.other}>{data.Pageview}</p>
            </Card>
          </Col>
        </Row>
      ))}
      {dataa.map((dataa, index) => (
        <Row key={index} className={Styles.cards}>
          <Col>
            <Card bordered={false}>
              <div className={Styles.cardelements}>
                <p className={Styles.otherr}>Sale</p>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={Styles.monthtxt}>This Month</p>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </div>
              <BarChartComponent />
            </Card>
          </Col>
          <Col>
            <Card bordered={false} style={{ width: 250 }}>
              <p className={Styles.otherr}>Orders</p>
              <div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Total</p> <p>{dataa.Total}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Completed</p>{" "}
                  <p style={{ color: "#42B00F" }}>{dataa.Completed}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Pending</p> <p>{dataa.Pending}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Processing</p> <p>{dataa.Processing}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Cancelled</p>{" "}
                  <p style={{ color: "red" }}>{dataa.Cancelled}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>Refunded</p>{" "}
                  <p style={{ color: "#FFAB00" }}>{dataa.Refunded}</p>{" "}
                </div>
                <div className={Styles.disbet}>
                  {" "}
                  <p>On hold</p>{" "}
                  <p style={{ color: "#FFAB00" }}>{dataa.hold}</p>{" "}
                </div>
              </div>
            </Card>
          </Col>

          <Col>
            <Card bordered={false} style={{ width: 250 }}>
              <p className={Styles.otherr}>Products</p>
              {productdata.map((data, index) => (
                <div key={index}>
                  <div className={Styles.disbet}>
                    {" "}
                    <p>Total</p> <p>{data.Total}</p>{" "}
                  </div>
                  <div className={Styles.disbet}>
                    {" "}
                    <p>Live</p> <p>{data.Live}</p>{" "}
                  </div>
                  <div className={Styles.disbet}>
                    {" "}
                    <p>Offline</p> <p>{data.Offline}</p>{" "}
                  </div>
                  <div className={Styles.disbet}>
                    {" "}
                    <p>Pending Review</p> <p>{data.Pending}</p>{" "}
                  </div>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Sellerdashboard;
