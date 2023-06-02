import React from "react";
import { Button, Tabs, Card } from "antd";
import Styles from "../../styles/RightListing.module.css";
import Sellerdashboard from "./Sellerdashboard";

function callback(key) {
  console.log(key);
}

const { TabPane } = Tabs;

function RightSeller() {
  return (
    <div className={Styles.flexbet}>
      <div className={Styles.tabbutton}>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="Dashboard" key="1" className={Styles.blscktext}>
            <Sellerdashboard />
          </TabPane>
          <TabPane tab="Products" key="2" className={Styles.blscktext}>
            abc
          </TabPane>
          <TabPane tab="Orders" key="3" className={Styles.blscktext}>
            abc
          </TabPane>
          <TabPane tab="Withdraw" key="4" className={Styles.blscktext}>
            abc
          </TabPane>
          <TabPane tab="Settings" key="5" className={Styles.blscktext}>
            abc
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightSeller;
