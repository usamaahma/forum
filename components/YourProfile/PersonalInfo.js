import React from "react";
import Styles from "../../styles/PersonalInfo.module.css";
import Edit from "../../public/images/Edit.png";
import Image from "next/image";
import { Col, Row, Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function PersonalInfo() {
  return (
    <div>
      <div className={Styles.mainbox}>
        <div className={Styles.eidtdiv}>
          <p>Personal Information</p>
          <Image src={Edit} alt="" />
        </div>
        <hr />
        <div className={Styles.paddingdiv}>
          <Row justify="center">
            <Col lg={12} md={12} xs={24}>
              <div className={Styles.centerdiv}>
                <div>
                  <h3>Basic Information</h3>
                  <hr />
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
                      <Input className={Styles.input} placeholder="Istiaq" />
                    </Form.Item>
                    <p className={Styles.namtext}>Last Name</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input className={Styles.input} placeholder="Firoz" />
                    </Form.Item>
                    <p className={Styles.namtext}>Date of Birth</p>
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
                        placeholder="09/02/2023"
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>Email</p>
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
                        placeholder="efat@gmail.com"
                      />
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
                    <p className={Styles.namtext}>Phone</p>
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
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <div className={Styles.centerdiv}>
                <div>
                  <h3>Education</h3>
                  <hr />
                  <br />
                  <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <p className={Styles.namtext}>Institution</p>
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
                        placeholder="University of Dhaka"
                      />
                    </Form.Item>

                    <p className={Styles.namtext}>Highest Degree</p>
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
                        placeholder="Masters in Social Science"
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>Certification</p>
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
                        placeholder="Amazon Cloud Practitioner"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className={Styles.eidtdiv}>
          <p>Business Info</p>
          <Image src={Edit} alt="" />
        </div>
        <hr />
        <div className={Styles.paddingdiv}>
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
                    <p className={Styles.namtext}>Business Name</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input className={Styles.input} placeholder="Technovee" />
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
                    <p className={Styles.namtext}>Business Email</p>
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
                        placeholder="efat@gmail.com"
                      />
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
        </div>
        <hr />
        <div className={Styles.eidtdiv}>
          <p>Social Network</p>
          <Image src={Edit} alt="" />
        </div>
        <hr />
        <div className={Styles.paddingdiv}>
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
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Facebook</p>
                      <Input className={Styles.input} placeholder="Technovee" />
                    </Form.Item>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Instagram</p>
                      <Input
                        className={Styles.input}
                        placeholder="istiaq_firoz"
                      />
                    </Form.Item>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Twitter</p>
                      <Input
                        className={Styles.input}
                        placeholder="istiaq_firoz"
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Upload Photo</p>

                      <Input
                        className={Styles.input}
                        placeholder="09/02/2023"
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
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Youtube</p>
                      <Input
                        className={Styles.input}
                        placeholder="istiaq_firoz"
                      />
                    </Form.Item>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Linkedin</p>
                      <Input
                        className={Styles.input}
                        placeholder="istiaq_firoz"
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>GitHub</p>
                      <Input
                        className={Styles.input}
                        placeholder="istiaq_firoz"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
