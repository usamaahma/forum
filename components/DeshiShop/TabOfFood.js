import React from "react";
import Styles from "../../styles/TabOfFood.module.css";
import { Tabs } from "antd";
import ConsumerFood from "./ConsumerFood";

function TabOfFood() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.tabdiv}>
        <h3 className={Styles.context}>Consumer Food</h3>
        <div className={Styles.greenline}></div>
        <Tabs
          centered
          className={Styles.ant}
          defaultActiveKey="1"
          items={[
            {
              label: "Fruits & Vegetables",
              key: "1",
              children: <ConsumerFood />,
            },
            {
              label: "Meat & Fish",
              key: "2",
              children: <ConsumerFood />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default TabOfFood;
