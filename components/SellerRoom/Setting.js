import React from "react";
import Styles from "../../styles/Setting.module.css";
import { Tabs } from "antd";
import PaymentRoom from "./PaymentRoom";
import RightCoupon from "../MyCoupon/RightCoupon";
import Coupon from "./Coupon";
import Store from "./Store";
function callback(key) {
  console.log(key);
}

const { TabPane } = Tabs;
function Setting() {
  return (
    <div className={Styles.maindiv}>
      <div className={Styles.flexbet}>
        <div className={Styles.tabbutton}>
          <Tabs
            onChange={callback}
            type="card"
            size="small"
            className={Styles.sizetab}
          >
            <TabPane tab="Store" key="1" className={Styles.blscktext}>
              <Store />
            </TabPane>
            <TabPane tab="Payment" key="2" className={Styles.blscktext}>
              <PaymentRoom />
            </TabPane>
            <TabPane tab="Coupon" key="3" className={Styles.blscktext}>
              <Coupon />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Setting;
