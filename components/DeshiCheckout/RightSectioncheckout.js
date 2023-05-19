import React, { useState } from "react";
import Styles from "../../styles/ShoppingCart.module.css";
import { Radio, Input, Select, Checkbox, Button, message } from "antd";
import Image from "next/image";
import Per from "../../public/images/image 164.png";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    key: 1,
    name: "cart",
  },
  {
    key: 2,
    name: "cart",
  },
  {
    key: 3,
    name: "cart",
  },
  {
    key: 4,
    name: "cart",
  },
];
function RightSectioncheckout() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangee = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <div>
        <p className={Styles.order}>Order Summary</p>
        <hr className={Styles.line} />
        <p className={Styles.shippingtext}>Shipping</p>
        <Select
          placeholder="free shipping"
          style={{
            width: 260,
          }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
        <div className={Styles.perdiv}>
          <Image src={Per} alt="" />
          <p className={Styles.havetext}>
            Have a coupon?{" "}
            <a className={Styles.click}>Click here enter your codes</a>
          </p>
        </div>
        <div className={Styles.divstyle}>
          <p className={Styles.iftext}>
            If you have a coupon code, please apply it below.
          </p>
          <div className={Styles.divrow}>
            <Input placeholder="Coupon code" className={Styles.input} />
            <button className={Styles.applybtn}>Apply</button>
          </div>
        </div>
        <div className={Styles.divrow1}>
          <p className={Styles.total}>Subtotal</p>
          <p className={Styles.total}>$800.00</p>
        </div>
        <div className={Styles.divrow1}>
          <p className={Styles.total}>Shipping</p>
          <p className={Styles.total}>$9.00</p>
        </div>
        <hr className={Styles.line} />
        <div className={Styles.divrow1}>
          <p className={Styles.total}>Total</p>
          <p className={Styles.total}>$809.00</p>
        </div>
      </div>
      <div>
        <p className={Styles.order}>Payment</p>
        <hr className={Styles.line} />
        <p>Pay With:</p>

        <Radio.Group
          onChange={onChange}
          value={value}
          style={{ marginTop: ".5rem" }}
        >
          <Radio className={Styles.myRadio} value={1}>
            Card
          </Radio>
          <Radio value={2} className={Styles.myRadio}>
            Bank
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <p style={{ marginTop: "1rem", marginBottom: ".5rem" }}>Card Number</p>
        <Input placeholder="1234 5678 9101 1121" />
      </div>
      <div className={Styles.gapdisst}>
        <p style={{ marginTop: "1rem", marginBottom: ".5rem" }}>
          Expiration Date
        </p>
        <p style={{ marginTop: "1rem", marginBottom: ".5rem" }}>Cvv</p>
      </div>
      <div className={Styles.gapdist}>
        <Input className={Styles.wdin} placeholder="MM/YY" />
        <Input className={Styles.wdin} placeholder="123" />
      </div>
      <div>
        <Checkbox onChange={onChangee} className={Styles.checkgap}>
          Save card details
        </Checkbox>
      </div>
      <Button
        className={Styles.butn}
        onClick={() => message.success("Processing complete!")}
      >
        Pay Now
      </Button>
    </div>
  );
}

export default RightSectioncheckout;
