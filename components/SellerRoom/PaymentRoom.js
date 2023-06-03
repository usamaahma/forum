import React, { useState } from "react";
import Styles from "../../styles/PaymentRoom.module.css";
import {
  Collapse,
  Input,
  Radio,
  DatePicker,
  Checkbox,
  Select,
  Dropdown,
} from "antd";
import Image from "next/image";
import { DashOutlined } from "@ant-design/icons";
import Chase from "../../public/images/cas.png";
import Am from "../../public/images/image 169.png";
const { Panel } = Collapse;
const items = [
  {
    label: <a className={Styles.edittext}>Edit</a>,
    key: "0",
  },
  {
    label: <a className={Styles.edittext}>Remove</a>,
    key: "1",
  },
];
function PaymentRoom() {
  const onChange1 = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <div className={Styles.divmain}>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition="end"
          className={Styles.bgclr}
        >
          <Panel header="Add Paypal Account" key="1">
            <p className={Styles.pay}>PayPal</p>
            <hr style={{ border: "#E8E8E8 solid 1px", marginBottom: "1rem" }} />
            <Radio onChange={onChange1}>PayPal</Radio>
            <div className={Styles.divcenter}>
              <p className={Styles.textem}>Email</p>
              <Input placeholder="admin@gmail.com" className={Styles.input} />
              <button className={Styles.savebtn}>Save</button>
            </div>
          </Panel>
          <Panel header="Credit Card" key="2">
            <p className={Styles.pay}>Credit Card</p>
            <hr style={{ border: "#E8E8E8 solid 1px", marginBottom: "1rem" }} />
            <Radio onChange={onChange1}>Credit or Debit Card</Radio>
            <div className={Styles.divcenter}>
              <div className={Styles.divrwo}>
                <div>
                  <p className={Styles.textem}>Card Number</p>
                  <Input placeholder="vendor name" className={Styles.input22} />
                </div>
                <div>
                  <p className={Styles.textem}>Name on Card</p>
                  <Input
                    placeholder="Name on Card"
                    className={Styles.input22}
                  />
                </div>
                <div>
                  <p className={Styles.textem}>Expiration Date</p>
                  <DatePicker
                    className={Styles.input22}
                    placeholder="Expiration Date"
                  />
                </div>
              </div>
              <Checkbox onChange={onChange}>
                Address same as business address
              </Checkbox>
              <div>
                <button className={Styles.savebtn}>Save</button>
              </div>
            </div>
          </Panel>
          <Panel header="Bank Account " key="3">
            <p className={Styles.pay}>Bank Account </p>
            <hr style={{ border: "#E8E8E8 solid 1px", marginBottom: "1rem" }} />
            <Radio onChange={onChange1}>Bank Account</Radio>
            <div className={Styles.divcenter}>
              <div className={Styles.divrwo}>
                <div>
                  <p className={Styles.textem}>Select Bank Namer</p>
                  <Select
                    className={Styles.input22}
                    placeholder=" What is your bank name?"
                    options={[
                      {
                        value: "Meezan Bank",
                        label: "Meezan Bank",
                      },
                      {
                        value: "Meezan Bank",
                        label: "Meezan Bank",
                      },
                    ]}
                  />
                </div>
                <div>
                  <p className={Styles.textem}>Account holder name</p>
                  <Input placeholder="Name" className={Styles.input22} />
                </div>
                <div className={Styles.mrtop}>
                  <Radio onChange={onChange1}>Checking</Radio>
                  <Radio onChange={onChange1}>Saving</Radio>
                </div>
              </div>
              <div className={Styles.divrwo}>
                <div>
                  <p className={Styles.textem}>Account Number</p>
                  <Input placeholder="Number" className={Styles.input22} />
                </div>
                <div>
                  <p className={Styles.textem}>Verify Account Number</p>
                  <Input
                    placeholder="Account Number"
                    className={Styles.input22}
                  />
                </div>
                <div>
                  <p className={Styles.textem}>Routing number</p>
                  <Input
                    placeholder="Routing number"
                    className={Styles.input22}
                  />
                </div>
              </div>
              <Checkbox onChange={onChange}>
                Address same as business address
              </Checkbox>
              <div>
                <button className={Styles.savebtn}>Save</button>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
      <div className={Styles.bigdivbox}>
        <div className={Styles.divbox}>
          <div className={Styles.flerowdiv}>
            <Image src={Chase} alt="" />
            <p className={Styles.faiztext}>Istiaq Firoz</p>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <DashOutlined />
            </Dropdown>
          </div>
          <p className={Styles.savtext}>Saving</p>
          <p className={Styles.acctext}>Account Number: 123 000 000</p>
          <p className={Styles.acctext}>Routing Number: 000 000 123</p>
        </div>
        <div className={Styles.divbox}>
          <div className={Styles.flerowdiv}>
            <Image src={Am} alt="" />
            <p className={Styles.faiztext}>Istiaq Firoz</p>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <DashOutlined />
            </Dropdown>
          </div>
          <p className={Styles.notext}> 1230 000000 00000</p>
          <p className={Styles.savtext}>Expiration Date: 5 april, 2025</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentRoom;
