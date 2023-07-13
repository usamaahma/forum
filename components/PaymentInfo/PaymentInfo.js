import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightProfile.module.css";
import Payment from "./Pay";

function PaymentInfo({ next }) {
  return (
    <div  style={{ marginTop: "5rem" }}>
      <div className={Styles.flexbeta}>
        {" "}
        <Payment />
      </div>
      <div  className={Styles.leftside}>
        {" "}
        <button htmlType="submit" className={Styles.btn} onClick={() => next()}>
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default PaymentInfo;
