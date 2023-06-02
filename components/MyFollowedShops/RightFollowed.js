import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightFollowed.module.css";
import FollowedShopsCard from "./FollowedShopsCard";
import FollowedMember from "./FollowedMember";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function RightFollowed() {
  return (
    <div>
      <div>
        <Tabs onChange={callback} type="card" size="small">
          <TabPane tab="Store" key="1" className={Styles.blscktext}>
            {" "}
            <FollowedShopsCard />{" "}
          </TabPane>
          <TabPane tab="Member" key="2" className={Styles.blscktext}>
            <FollowedMember />{" "}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightFollowed;
