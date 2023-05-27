import React, { useState } from "react";
import Styles from "../../styles/Payment.module.css";
import { Collapse, Input, Radio } from "antd";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function Payment() {
  const onChange1 = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange = (key) => {
    console.log(key);
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
            <p>{text}</p>
          </Panel>
          <Panel header="Bank Account " key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default Payment;
