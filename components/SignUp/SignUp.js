import React from "react";
import { Col, Row, Button, Checkbox, Form, Input } from "antd";
import Image from "next/image";
import LoginImage from "../../public/images/Frame 44804.png";
import Google from "../../public/images/Group 9847.png";
import Facebbok from "../../public/images/Vector (10).png";
import Styles from "../../styles/SignUp.module.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function SignUp({ next }) {
  return (
    <div>
      <Row justify="center">
        <Col>
          <div className={Styles.centercol}>
            <div className={Styles.whitediv}>
              <h2>Sign Up</h2>
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
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your your name!",
                    },
                  ]}
                >
                  <p>Your Name</p>
                  <Input
                    placeholder="First & Last Name"
                    className={Styles.input}
                  />
                </Form.Item>
                <div className={Styles.divflexxxx}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <p>Email</p>
                    <Input placeholder="email" className={Styles.input1} />
                  </Form.Item>
                  <Form.Item
                    name="PhoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone Number!",
                      },
                    ]}
                  >
                    <p>Phone Number</p>
                    <Input
                      placeholder="Phone Number"
                      className={Styles.input1}
                    />
                  </Form.Item>
                </div>
                <div className={Styles.divflexxxx}>
                  <Form.Item
                    name="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <p>Password</p>
                    <Input.Password
                      placeholder="Password"
                      className={Styles.input1}
                    />
                  </Form.Item>
                  <Form.Item
                    name="ReEnterPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Re- Enter Password!",
                      },
                    ]}
                  >
                    <p>Re- Enter Password</p>
                    <Input.Password
                      placeholder="Re- Enter Password"
                      className={Styles.input1}
                    />
                  </Form.Item>
                </div>
                <div className={Styles.flexdivpass}>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember Me</Checkbox>
                  </Form.Item>
                </div>
                <Form.Item>
                  <button
                    htmlType="submit"
                    className={Styles.btn}
                    onClick={() => next()}
                  >
                    Sign Up
                  </button>
                </Form.Item>
                <p className={Styles.textor}>OR Continue with</p>
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
                  By creating an account, you agree to bongodeshi’s
                  <br />
                  <a className={Styles.signtext}>Sterm of condition</a> and{" "}
                  <a className={Styles.signtext}>Privacy Policy.</a>
                </p>
                <hr style={{ border: "#E8E8E8 solid 1px" }} />
                <p className={Styles.donttext}>
                  Want to do business on Bongodeshi?
                  <br />
                  <a className={Styles.signtext}>
                    Create a business account.
                  </a>{" "}
                </p>
              </Form>
            </div>
          </div>
        </Col>
        <Col>
          <div className={Styles.centercol}>
            <div>
              <Image src={LoginImage} alt="" className={Styles.sizeimg} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
