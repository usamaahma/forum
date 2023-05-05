import React from "react";
import { Card, Row, Col } from "antd";
import Link from "next/link";

function Cardeventcar() {
  const data = [
    {
      name: "APR",
      subname: "April 14,2023 10:00PM- April 16,2023",
      nameOne: "Pohela Boisakh",
      nametwo: "Hilton Hotel, Jacksion Heights NY 10473",
      subnametwo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
    },
  ];

  return (
    <div>
      <div>
        <Link href="/EventsTwoPage">
          {data.map((user, index) => (
            <Card
              hoverable
              style={{
                width: 250,
              }}
              cover={<img alt="example" src="../images/bengali.png" />}
              key={index}
            >
              <div style={{ float: "right", display: "flex", gap: ".5rem" }}>
                <img alt="abc" src="../images/Star 2.png"></img>
                <img alt="abc" src="../images/Share.png"></img>
              </div>
              <br />
              <div>
                <Row style={{ display: "flex" }} justify={"space-evenly"}>
                  <Col style={{ display: "grid", alignItems: "center" }}>
                    <img
                      style={{ width: "1.5rem" }}
                      alt="abc"
                      src="../images/Calendar 2.png"
                    ></img>
                    <p style={{ fontWeight: "bold", fontSize: ".6rem" }}>14</p>
                    <p style={{ color: "#A1A1A1", fontSize: ".6rem" }}>APR</p>
                  </Col>
                  <Col style={{ display: "grid", alignItems: "center" }}>
                    <p style={{ color: "#A1A1A1", fontSize: ".5rem" }}>
                      April 14,2023 10:00PM- April 16,2023
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: ".6rem" }}>
                      Pohela Boisakh
                    </p>
                    <div style={{ display: "flex" }}>
                      <img
                        alt="abc"
                        src="../images/Locatin (1).png"
                        style={{ width: "1rem", height: "1rem" }}
                      ></img>
                      <p style={{ fontSize: ".6rem" }}>
                        Hilton Hotel, Jacksion Heights
                        <br /> NY 10473
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          ))}
        </Link>
      </div>
    </div>
  );
}

export default Cardeventcar;
