import React from "react";
import Styles from "../../styles/TabOfFood.module.css";
import { Tabs } from "antd";
import HomeLiving from "./HomeLiving";

function TabOfHome() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.tabdiv}>
        <h3 className={Styles.context}>Home & Living</h3>
        <div className={Styles.greenline}></div>
        <Tabs
          centered
          className={Styles.ant}
          defaultActiveKey="1"
          items={[
            {
              label: "Furniture",
              key: "1",
              children: <HomeLiving />,
            },
            {
              label: "Flower & Plant",
              key: "2",
              children: <HomeLiving />,
            },
            {
              label: "Kitchen & Dining Items",
              key: "3",
              children: <HomeLiving />,
            },
            {
              label: "Home & Office Appliance",
              key: "4",
              children: <HomeLiving />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default TabOfHome;
