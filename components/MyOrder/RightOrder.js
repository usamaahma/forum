import React from "react";
import { Tabs, Select } from "antd";
import Styles from "../../styles/RightOrder.module.css";
import Order from "./Order";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;
const tabStyle = {
  borderBottom: "none",
};
function RightOrder() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs style={tabStyle} onChange={callback} type="card" size="small">
          <TabPane tab="All Order" key="1" className={Styles.blscktext}>
            <Order />
          </TabPane>
          <TabPane tab="Processing" key="2" className={Styles.blscktext}>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Shipped" key="3" className={Styles.blscktext}>
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Delivered" key="4" className={Styles.blscktext}>
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Return" key="5 " className={Styles.blscktext}>
            Content of Tab Pane 3
          </TabPane>
          {/* <TabPane tab="Return" key="6" className={Styles.blscktext}>
            Content of Tab Pane 3
          </TabPane> */}
        </Tabs>
      </div>
      <div>
        <Select
          className={Styles.mblviewend}
          defaultValue="This month"
          style={{ width: 120, marginTop: ".3rem" }}
          onChange={handleChange}
        >
          <Option value="This month">This month</Option>
          <Option value="This month">This month</Option>
        </Select>
      </div>
    </div>
  );
}

export default RightOrder;
