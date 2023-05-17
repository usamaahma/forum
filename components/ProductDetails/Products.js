import React from "react";
import Styles from "../../styles/Products.module.css";
import { Col, Row, Rate } from "antd";
import Rectangle from "../../public/images/Rectangle 39.png";
import Image from "next/image";
const data = [
  {
    key: 1,
    name: "product",
  },
  {
    key: 2,
    name: "product",
  },
  {
    key: 3,
    name: "product",
  },
  {
    key: 4,
    name: "product",
  },
];
function Products() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.center}>
              <div>
                <h2>Featured Products</h2>
                <br />
                <div
                  style={{
                    backgroundColor: "#42b00f",
                    borderWidth: 1,
                    width: "6rem",
                    border: "#42b00f 2px solid",
                    position: "absolute",
                    marginTop: "-.1rem",
                  }}
                ></div>
                <hr />
                {data.map((index) => (
                  <div key={index} className={Styles.flexbox}>
                    <Image src={Rectangle} alt="abc" />
                    <div className={Styles.sidediv}>
                      <Rate defaultValue={2.5} className={Styles.star} />
                      <p className={Styles.price}>$99.33</p>
                      <p className={Styles.price}>Product Name</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.center}>
              <div>
                <h2>Latest Products</h2>
                <br />
                <div
                  style={{
                    backgroundColor: "#42b00f",
                    borderWidth: 1,
                    width: "6rem",
                    border: "#42b00f 2px solid",
                    position: "absolute",
                    marginTop: "-.1rem",
                  }}
                ></div>
                <hr />
                {data.map((index) => (
                  <div key={index} className={Styles.flexbox}>
                    <Image src={Rectangle} alt="abc" />
                    <div className={Styles.sidediv}>
                      <Rate defaultValue={2.5} className={Styles.star} />
                      <p className={Styles.price}>$99.33</p>
                      <p className={Styles.price}>Product Name</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.center}>
              <div>
                <h2>Best Selling Products</h2>
                <br />
                <div
                  style={{
                    backgroundColor: "#42b00f",
                    borderWidth: 1,
                    width: "6rem",
                    border: "#42b00f 2px solid",
                    position: "absolute",
                    marginTop: "-.1rem",
                  }}
                ></div>
                <hr />
                {data.map((index) => (
                  <div key={index} className={Styles.flexbox}>
                    <Image src={Rectangle} alt="abc" />
                    <div className={Styles.sidediv}>
                      <Rate defaultValue={2.5} className={Styles.star} />
                      <p className={Styles.price}>$99.33</p>
                      <p className={Styles.price}>Product Name</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
