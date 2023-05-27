import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightProfile.module.css";
import PersonalInfo from "./PersonalInfo";
import LoginInfo from "./LoginInfo";
import ShippingAddress from "./ShippingAddress";
import Payment from "./Payment";

function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;

function RightProfile() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane
            tab="Personal Information"
            key="1"
            className={Styles.blscktext}
          >
            <PersonalInfo />
          </TabPane>
          <TabPane
            tab="Login & Security Info "
            key="2"
            className={Styles.blscktext}
          >
            <LoginInfo />
          </TabPane>
          <TabPane tab="Shipping Address" key="3" className={Styles.blscktext}>
            <ShippingAddress />
          </TabPane>
          <TabPane tab="Payment Setting" key="4" className={Styles.blscktext}>
            <Payment />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightProfile;
