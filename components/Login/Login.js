import React from "react";
import { Col, Row, Button, Checkbox, Form, Input, Steps } from "antd";
import Image from "next/image";
import LoginImage from "../../public/images/Frame 44804.png";
import LoginImage1 from "../../public/images/Frame 45130.png";
import LoginImage2 from "../../public/images/Frame 45131.png";
import Google from "../../public/images/Group 9847.png";
import Facebbok from "../../public/images/Vector (10).png";
import Styles from "../../styles/Login.module.css";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Flow from "../../public/images/flow.png";
import Bar from "../../public/images/Group 48096004.png";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Login() {
  return (
    <div style={{ padding: "30px 0px" }}>
      <Row justify="center">
        <Col>
          <div className={Styles.centercol}>
            <div className={Styles.whitediv}>
              <h2>Log in</h2>
              <br />
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" className={Styles.input} />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className={Styles.input}
                  />
                </Form.Item>
                <div className={Styles.flexdivpass}>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember Me</Checkbox>
                  </Form.Item>
                  <p className={Styles.fortxt}>Forget Password?</p>
                </div>
                <Form.Item>
                  <button htmlType="submit" className={Styles.btn}>
                    Login
                  </button>
                </Form.Item>
                <p className={Styles.textor}>OR</p>
                <Form.Item>
                  <button htmlType="submit" className={Styles.btn1}>
                    <Image src={Google} alt="" className={Styles.logo} /> Login
                    with Google
                  </button>
                </Form.Item>
                <Form.Item>
                  <button htmlType="submit" className={Styles.btn1}>
                    <Image src={Facebbok} alt="" className={Styles.logo} />{" "}
                    Login with FaceBook
                  </button>
                </Form.Item>
                <p className={Styles.donttext}>
                  Dont have any account?{" "}
                  <Link href="/SignUpProcessPage">
                    {" "}
                    <a className={Styles.signtext}>Sign Up</a>
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </Col>
        <Col>
          <div className={Styles.centercol}>
            <div className={Styles.width}>
              {/* <Image src={Flow} alt="" className={Styles.flowimg} /> */}
              {/* <Image src={Bar} alt="" /> */}
              {/* <div className={Styles.centerdot}>
                <Steps
                  className={Styles.centerdot}
                  progressDot
                  current={1}
                  direction="vertical"
                  items={[
                    {
                      title: <p className={Styles.dottt}>Deshi Shop</p>,
                      description: (
                        <p className={Styles.dottt}>
                          দেশী শপে দোকান খুলে পণ্য ক্রয়
                          <br /> বিক্রয় করুন।
                        </p>
                      ),
                    },
                    {
                      title: <p className={Styles.dottt}>Deshi service</p>,
                      description: (
                        <p className={Styles.dottt}>
                          দেশী ভাই-বোনদের সেবা দিতে দেশী
                          <br /> সার্ভিসে আপনার প্রতিষ্ঠানের <br />
                          বিজ্ঞাপন দিন।{" "}
                        </p>
                      ),
                    },
                    {
                      title: <p className={Styles.dottt}>Buy & Sell</p>,
                      description: (
                        <p className={Styles.dottt}>
                          বাই এন্ড সেলে আপনার ব্যবহৃত ও<br /> অব্যবহৃত সকল পণ্য
                          ক্রয়-বিক্রয়ের <br />
                          জন্য বিজ্ঞাপন দিন।
                        </p>
                      ),
                    },
                  ]}
                />
              </div> */}
              <Carousel
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                transitionTime={2000}
              >
                <div className={Styles.center}>
                  <Image src={LoginImage} alt="" className={Styles.sizeimg} />
                </div>
                <div className={Styles.center}>
                  <Image src={LoginImage1} alt="" className={Styles.sizeimg} />
                </div>
                <div className={Styles.center}>
                  <Image src={LoginImage2} alt="" className={Styles.sizeimg} />
                </div>
              </Carousel>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
