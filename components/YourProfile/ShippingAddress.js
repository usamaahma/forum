import React from "react";
import Styles from "../../styles/ShippingAddress.module.css";
import Image from "next/image";
import { Col, Row, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function ShippingAddress() {
  return (
    <div>
      <div className={Styles.mainbox}>
        <div className={Styles.paddingdiv}>
          <div className={Styles.paddleft}>
            <h4>Shipping Address</h4>
          </div>
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
                    <p className={Styles.namtext}>First Name</p>
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
                        placeholder="First Name"
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>Contact Number</p>
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
                        placeholder="+1 (929) 303 0303"
                      />
                    </Form.Item>
                    <div className={Styles.spacebet}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className={Styles.namtext}>City</p>
                        <Input className={Styles.input1} placeholder="city" />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className={Styles.namtext}>State</p>
                        <Input className={Styles.input1} placeholder="State" />
                      </Form.Item>
                    </div>
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
                    <p className={Styles.namtext}>Last Name</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input className={Styles.input} placeholder="Last Name" />
                    </Form.Item>
                    <p className={Styles.namtext}>Address</p>
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
                        placeholder="1329 Saint Lawrence Ave, Bronx, NY"
                      />
                    </Form.Item>
                    <div className={Styles.spacebet}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className={Styles.namtext}>Postal</p>
                        <Input className={Styles.input1} placeholder="Postal" />
                      </Form.Item>

                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className={Styles.namtext}>Country</p>
                        <Input
                          className={Styles.input1}
                          placeholder="Country"
                        />
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
          <div className={Styles.paddleft}>
            <button className={Styles.greenbtn}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
