import React from "react";
import Styles from "../../styles/BusinessInfo.module.css";
import { Form, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function BusinessInfo({ next }) {
  return (
    <div className={Styles.centerwholediv}>
      <div className={Styles.whitediv}>
        <h2 className={Styles.textlet}>
          Let’s Complete Your Profile And Connect With Deshi
          <br /> Community Network
        </h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />

        <div className={Styles.centercol}>
          <div>
            <div className={Styles.flexbet}>
              <p className={Styles.infotext}>Business Info</p>
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
                name="businessName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Business Name!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Business Name</p>
                <Input placeholder="Technovee" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact Number!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Contact Number</p>
                <Input
                  placeholder="+1 (929) 303 0303"
                  className={Styles.input}
                />
              </Form.Item>
              <Form.Item
                name="businessEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input your Business Email!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Business Email</p>
                <Input placeholder="efat@gmail.com" className={Styles.input} />
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
              <div className={Styles.flexdis}>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your City!",
                    },
                  ]}
                >
                  <p className={Styles.textinput}>City</p>
                  <Input placeholder="City" className={Styles.input1} />
                </Form.Item>
                <Form.Item
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "Please input your State!",
                    },
                  ]}
                >
                  <p className={Styles.textinput}>State</p>
                  <Input placeholder="State" className={Styles.input1} />
                </Form.Item>
              </div>
              <div className={Styles.flexdis}>
                <Form.Item
                  name="postal"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Postal!",
                    },
                  ]}
                >
                  <p className={Styles.textinput}>Postal</p>
                  <Input placeholder="Postal" className={Styles.input1} />
                </Form.Item>
                <Form.Item
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Country!",
                    },
                  ]}
                >
                  <p className={Styles.textinput}>Country</p>
                  <Input placeholder="Country" className={Styles.input1} />
                </Form.Item>
              </div>
              <div className={Styles.leftside}>
                <p
                  style={{ color: "#0065FF", fontWeight: "600" }}
                  onClick={() => next()}
                >
                  Skip
                </p>
                <Form.Item>
                  <div>
                    <button
                      htmlType="submit"
                      className={Styles.btn}
                      onClick={() => next()}
                    >
                      Save & Continue
                    </button>
                  </div>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
