import React from "react";
import Styles from "../../styles/taxpayer.module.css";
import {
  Tooltip,
  Space,
  Button,
  Radio,
  Dropdown,
  Input,
  Checkbox,
  Form,
} from "antd";
import { EditOutlined } from "@ant-design/icons";

const customColors = ["#42B00F"];

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function VerifyIdentity({ next }) {
  return (
    <div className={Styles.mrtoptax}>
      <div className={Styles.paddingall}>
        <h2> Lets start Business With Bongodeshi</h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <br />
        <div className={Styles.bothewet}>
          <h3>Verify Your Identity</h3>
          <EditOutlined />
        </div>
        <hr style={{ border: "solid 1px  #E8E8E8", marginBottom: "2rem" }} />
        <br />
        <div>
          <div>
            <p>State Id Card Number</p>
            <Input
              placeholder="State Id Card Number"
              className={Styles.widthinp}
            />
          </div>
          <br />
          <div className={Styles.leftside}>
            {" "}
            <Button className={Styles.btn}>Upoad Your Id</Button>
          </div>
        </div>
        <br />
        <br />
        <div>
          <div>
            <p>Mobile Verification</p>
            <Input placeholder="Mobile Number" className={Styles.widthinp} />
            <br />
            <br />
            <Radio>
              {" "}
              <h4>Call me </h4>
            </Radio>{" "}
            <br />
            <Radio>
              {" "}
              <h4>Send me a Text</h4>
            </Radio>
          </div>
          <br />
          <div className={Styles.leftside}>
            {" "}
            <Button className={Styles.btan}>Send me a Text</Button>
          </div>
        </div>
        <br /> <br />
        <Form
          className={Styles.formcenter}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item>
            <div className={Styles.leftside}>
              {" "}
              <button
                type="primary"
                htmlType="submit"
                onClick={() => next()}
                style={{ marginTop: "5rem" }}
                className={Styles.btn}
              >
                Save and Continue
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default VerifyIdentity;
