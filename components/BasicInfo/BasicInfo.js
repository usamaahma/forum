import React from "react";
import Styles from "../../styles/BasicInfo.module.css";
import { Col, Form, Input, Row } from "antd";
import { FormOutlined } from "@ant-design/icons";
import styled from "styled-components";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function BasicInfo({ next }) {
  return (
    <div className={Styles.centerwholediv}>
      <div className={Styles.whitediv}>
        <h2 className={Styles.textlet}>
          Let’s Complete Your Profile And Connect With Deshi
          <br /> Community Network
        </h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <Row justify="center">
          <Col>
            <div className={Styles.centercol}>
              <div>
                <div className={Styles.flexbet}>
                  <p className={Styles.infotext}>Basic Information</p>
                  <FormOutlined />
                </div>
                <hr
                  style={{
                    border: "solid 1px  #D0D0D0",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                  }}
                />
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
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>First Name</p>
                    <Input placeholder="Istiaq" className={Styles.input} />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Last Name</p>
                    <Input placeholder="Firoz" className={Styles.input} />
                  </Form.Item>
                  <Form.Item
                    name="dateofBirth"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Date of Birth!",
                      },
                    ]}
                  >
                    <p>Date of Birth</p>
                    <Input placeholder="09/02/2023" className={Styles.input} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Email</p>
                    <Input
                      placeholder="efat@gmail.com"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Address!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Address</p>
                    <Input
                      placeholder="1329 Saint Lawrence Ave, Bronx, NY"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Phone</p>
                    <Input
                      placeholder="+1 (929) 303 0303"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <p
                    style={{
                      color: "#0065FF",
                      fontWeight: "600",
                      marginBottom: "1rem",
                    }}
                    onClick={() => next()}
                  >
                    Skip
                  </p>
                </Form>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol}>
              <div>
                <div className={Styles.flexbet}>
                  <p className={Styles.infotext}>Education</p>
                  <FormOutlined />
                </div>
                <hr
                  style={{
                    border: "solid 1px  #D0D0D0",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                  }}
                />
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
                    name="institution"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Institution!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Institution</p>
                    <Input
                      placeholder="University of Dhaka"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <Form.Item
                    name="highestDegree"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Highest Degree!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Highest Degree</p>
                    <Input
                      placeholder="Masters in Social Science"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <Form.Item
                    name="certification"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Certification!",
                      },
                    ]}
                  >
                    <p className={Styles.textinput}>Certification</p>
                    <Input
                      placeholder="Amazon Cloud Practitioner"
                      className={Styles.input}
                    />
                  </Form.Item>
                  <Form.Item>
                    <div className={Styles.leftside}>
                      <button
                        htmlType="submit"
                        className={Styles.btn}
                        onClick={() => next()}
                      >
                        Save & Continue
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BasicInfo;
