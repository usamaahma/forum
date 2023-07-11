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
function SocialNetwork({ next }) {
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
              <p className={Styles.infotext}>Social Network</p>
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
                name="facebook"
                rules={[
                  {
                    required: true,
                    message: "Please input your Facebook!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Facebook</p>
                <Input placeholder="Technovee" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="instagram"
                rules={[
                  {
                    required: true,
                    message: "Please input your Instagram!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Instagram</p>
                <Input placeholder="istiaq_firoz" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="twitter"
                rules={[
                  {
                    required: true,
                    message: "Please input your Twitter!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Twitter</p>
                <Input placeholder="istiaq_firoz" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="youtube"
                rules={[
                  {
                    required: true,
                    message: "Please input your Youtube!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Youtube</p>
                <Input placeholder="istiaq_firoz" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="linkedin"
                rules={[
                  {
                    required: true,
                    message: "Please input your Linkedin!",
                  },
                ]}
              >
                <p className={Styles.textinput}>Linkedin</p>
                <Input placeholder="istiaq_firoz" className={Styles.input} />
              </Form.Item>
              <Form.Item
                name="gitHub"
                rules={[
                  {
                    required: true,
                    message: "Please input your GitHub!",
                  },
                ]}
              >
                <p className={Styles.textinput}>GitHub</p>
                <Input placeholder="istiaq_firoz" className={Styles.input} />
              </Form.Item>
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

export default SocialNetwork;
