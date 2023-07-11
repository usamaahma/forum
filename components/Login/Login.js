import React from "react";
import { Col, Row, Button, Checkbox, Form, Input } from "antd";
import Image from "next/image";
import LoginImage from "../../public/images/Frame 44804.png";
import Google from "../../public/images/Group 9847.png";
import Facebbok from "../../public/images/Vector (10).png";
import Styles from "../../styles/Login.module.css";
import Link from "next/link";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Login() {
  return (
    <div>
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
            <div>
              <Image src={LoginImage} alt="" className={Styles.sizeimg} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
