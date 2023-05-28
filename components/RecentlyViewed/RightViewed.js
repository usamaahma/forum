import React from "react";
import { Tabs, Select } from "antd";
import Styles from "../../styles/RightViewed.module.css";
import DeshiShopViewed from "./DeshiShopViewed";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;

function RightViewed() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="Deshi Shop" key="1" className={Styles.blscktext}>
            <DeshiShopViewed />
          </TabPane>
          <TabPane tab="Listing" key="2" className={Styles.blscktext}>
            done
          </TabPane>
        </Tabs>
      </div>
      <div>
        <Select
          className={Styles.mblviewend}
          defaultValue="Filter by time"
          style={{ width: 140, marginTop: ".3rem" }}
          onChange={handleChange}
        >
          <Option value="Filter by time">Filter by time</Option>
          <Option value="Filter by time">Filter by time</Option>
        </Select>
      </div>
    </div>
  );
}

export default RightViewed;
