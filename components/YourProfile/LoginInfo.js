import React from "react";
import Styles from "../../styles/LoginInfo.module.css";
import Image from "next/image";
import { Col, Row, Select, Form, Input, Button, message, Upload } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function LoginInfo() {
  return (
    <div>
      <div className={Styles.mainbox}>
        <div className={Styles.paddingdiv}>
          <h3 className={Styles.paddleft}>Personal Information</h3>
          <Row justify="center">
            <Col lg={12} md={12} xs={24}>
              <div className={Styles.centerdiv}>
                <div>
                  <br />
                  <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <p className={Styles.namtext}>Current Password </p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        className={Styles.input}
                        placeholder="Current Password  "
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>Confirm Password</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        className={Styles.input}
                        placeholder="Confirm Password"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <div className={Styles.centerdiv}>
                <div>
                  <br />
                  <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <p className={Styles.namtext}>New Password</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        className={Styles.input}
                        placeholder="New Password"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
          <div className={Styles.paddleft}>
            <p className={Styles.fortext}>Forget Password</p>
            <div>
              <button className={Styles.greenbtn}>Save & Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
