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
import { DownOutlined } from "@ant-design/icons";

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

function TaxPayerInfo({ next }) {
  return (
    <div className={Styles.mrtoptax}>
      <div className={Styles.paddingall}>
        <h2> Lets start Business With Bongodeshi</h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <br />
        <h3>Taxpayer Information</h3>
        <hr style={{ border: "solid 1px  #E8E8E8", marginBottom: "2rem" }} />
        <br />
        <div className={Styles.twonogap}>
          {" "}
          <p> What is your tax classification </p>
          <Tooltip title="prompt text">
            <Space wrap>
              {customColors.map((color) => (
                <Tooltip
                  title="additionally, you will be considered a United States resident for tax purposes if you meet the Substantial Presence Test for the calendar year. More information about these distinctions is available on the U.S. IRS Website ."
                  color={color}
                  key={color}
                >
                  <Button className={Styles.buttons}>?</Button>
                </Tooltip>
              ))}
            </Space>{" "}
          </Tooltip>
        </div>
        <div className={Styles.radiobuttons}>
          <Radio>
            <h4>Individual</h4>
          </Radio>
          <br />
          <Radio className={Styles.radiobutton}>
            {" "}
            <h4>Business</h4>
          </Radio>
        </div>
        <div className={Styles.twonogap} style={{ marginTop: "2rem" }}>
          {" "}
          <p>1. Are You a Us Person </p>
          <Tooltip title="prompt text">
            <Space wrap>
              {customColors.map((color) => (
                <Tooltip
                  title="additionally, you will be considered a United States resident for tax purposes if you meet the Substantial Presence Test for the calendar year. More information about these distinctions is available on the U.S. IRS Website ."
                  color={color}
                  key={color}
                >
                  <Button className={Styles.buttons}>?</Button>
                </Tooltip>
              ))}
            </Space>{" "}
          </Tooltip>
        </div>
        <div className={Styles.radiobuttons}>
          <Radio>
            <h4>Yes</h4>
          </Radio>
          <br />
          <Radio className={Styles.radiobutton}>
            {" "}
            <h4>No</h4>
          </Radio>
        </div>
        <div className={Styles.twonogap} style={{ marginTop: "2rem" }}>
          {" "}
          <p>Federal tax Classification </p>
          <Tooltip title="prompt text">
            <Space wrap>
              {customColors.map((color) => (
                <Tooltip
                  title="additionally, you will be considered a United States resident for tax purposes if you meet the Substantial Presence Test for the calendar year. More information about these distinctions is available on the U.S. IRS Website ."
                  color={color}
                  key={color}
                >
                  <Button className={Styles.buttons}>?</Button>
                </Tooltip>
              ))}
            </Space>{" "}
          </Tooltip>
        </div>
        <div className={Styles.abcfd}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button className={Styles.bth}>
              <p>Sole Proprietorship</p> <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <br /> <br />
        <hr style={{ border: "solid 1px  #E8E8E8", marginBottom: "2rem" }} />
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
          <div className={Styles.twoinputs}>
            {" "}
            <Form.Item
              name="businessname"
              rules={[
                {
                  message: "Please input your Registered Business Name!",
                },
              ]}
            >
              Registered Business Name
              <Input className={Styles.spaces} />
            </Form.Item>
            <Form.Item
              name="tradename"
              rules={[
                {
                  message:
                    "Please input Doing Business as “DBA” or trade name!",
                },
              ]}
            >
              <p className={Styles.onshort}>
                {" "}
                Doing Business as “DBA” or trade name (optional)
              </p>
              <Input className={Styles.spaces} />
            </Form.Item>
          </div>
          <div className={Styles.twoinputs}>
            {" "}
            <Form.Item
              name="country"
              rules={[
                {
                  message: "Please input your Country!",
                },
              ]}
            >
              <p>Country</p>
              <Input className={Styles.spaces} />
            </Form.Item>
            <Form.Item
              name="city"
              rules={[
                {
                  message: "Please input Your City!",
                },
              ]}
            >
              <p>City</p> <Input className={Styles.spaces} />
            </Form.Item>
          </div>

          <Form.Item>
            <div className={Styles.leftside}>
              {" "}
              <button
                type="primary"
                htmlType="submit"
                onClick={() => next()}
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

export default TaxPayerInfo;
