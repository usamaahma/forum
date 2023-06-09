import React from "react";
import Styles from "../../styles/ShoppingCart.module.css";
import { Col, Input, Row, Select } from "antd";
import Image from "next/image";
import Shoe from "../../public/images/image 134.png";
import Per from "../../public/images/image 164.png";
import Frame from "../../public/images/Frame 33785.png";
import ShoppingProducts from "./ShoppingProducts";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    key: 1,
    name: "cart",
  },
  {
    key: 2,
    name: "cart",
  },
  {
    key: 3,
    name: "cart",
  },
  {
    key: 4,
    name: "cart",
  },
];
function ShoppingCart({ next }) {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercol}>
              <div>
                {/* for mobile view  */}
                <div className={Styles.webview}>
                  <div className={Styles.divbox12}>
                    <div>
                      <p>Product</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                {/*  for web view   */}
                <div className={Styles.mbl}>
                  <div className={Styles.divbox}>
                    <div>
                      <p>Product</p>
                    </div>
                    <div className={Styles.divboxtwo}>
                      <p>Price</p>
                      <p>Quantity</p>
                      <p>Total</p>
                    </div>
                  </div>
                </div>
                {/* for web view */}
                <div className={Styles.mbl}>
                  {data.map((index) => (
                    <div key={index} className={Styles.shoebox}>
                      <div className={Styles.flex}>
                        <Image src={Shoe} alt="" className={Styles.img} />
                        <div className={Styles.side}>
                          <p className={Styles.cottontext}>
                            Cotton Boutique’s Long Top
                          </p>
                          <p className={Styles.cottontext}>
                            Category: <a className={Styles.ctotext}>Cotton</a>
                          </p>
                        </div>
                      </div>
                      <div className={Styles.divboxtwo}>
                        <p className={Styles.price}>$400</p>
                        <div className={Styles.flexdiv}>
                          <button className={Styles.minus}>-</button>
                          <div className={Styles.textdivone}>1</div>
                          <button className={Styles.plus}>+</button>
                        </div>
                        <p className={Styles.price}>$400</p>
                      </div>
                      <Image src={Frame} alt="" className={Styles.position} />
                    </div>
                  ))}
                </div>
                {/* for mbl view */}
                <div className={Styles.webview}>
                  {data.map((index) => (
                    <div key={index} className={Styles.shoebox12}>
                      <div className={Styles.flex}>
                        <Image src={Shoe} alt="" className={Styles.img} />
                        <div className={Styles.side}>
                          <p className={Styles.cottontext}>
                            Cotton Boutique’s Long Top
                          </p>
                          <p className={Styles.cottontext}>
                            Category: <a className={Styles.ctotext}>Cotton</a>
                          </p>
                          <div className={Styles.flexdiv}>
                            <button className={Styles.minus}>-</button>
                            <div className={Styles.textdivone}>1</div>
                            <button className={Styles.plus}>+</button>
                          </div>
                        </div>
                        <div>
                          <p className={Styles.price}>$400</p>
                        </div>
                      </div>
                      <Image src={Frame} alt="" className={Styles.position} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
              <div>
                <p className={Styles.order}>Order Summary</p>
                <hr className={Styles.line} />
                <p className={Styles.shippingtext}>Shipping</p>
                <Select
                  placeholder="free shipping"
                  style={{
                    width: 260,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
                <div className={Styles.perdiv}>
                  <Image src={Per} alt="" />
                  <p className={Styles.havetext}>
                    Have a coupon?{" "}
                    <a className={Styles.click}>Click here enter your codes</a>
                  </p>
                </div>
                <div className={Styles.divstyle}>
                  <p className={Styles.iftext}>
                    If you have a coupon code, please apply it below.
                  </p>
                  <div className={Styles.divrow}>
                    <Input placeholder="Coupon code" className={Styles.input} />
                    <button className={Styles.applybtn}>Apply</button>
                  </div>
                </div>
                <div className={Styles.divrow1}>
                  <p className={Styles.total}>Subtotal</p>
                  <p className={Styles.total}>$800.00</p>
                </div>
                <div className={Styles.divrow1}>
                  <p className={Styles.total}>Shipping</p>
                  <p className={Styles.total}>$9.00</p>
                </div>
                <hr className={Styles.line} />
                <div className={Styles.divrow1}>
                  <p className={Styles.total}>Total</p>
                  <p className={Styles.total}>$809.00</p>
                </div>
                <div className={Styles.colm}>
                  <button className={Styles.probtn} onClick={() => next()}>
                    Proceed to Checkout
                  </button>
                  <button className={Styles.contbtn}>Continue Shopping</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <ShoppingProducts />
    </div>
  );
}

export default ShoppingCart;
