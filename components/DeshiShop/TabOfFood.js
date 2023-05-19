import React from "react";
import Styles from "../../styles/TabOfFood.module.css";
// import { Tabs } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ConsumerFood from "./ConsumerFood";

function TabOfFood() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.contdiv}>
        <h3>Consumer Food</h3>
        <div className={Styles.greenline}></div>
      </div>

      <div dir="rtl">
        {/* <Tabs
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
          
        /> */}
        <Tabs direction={"rtl"}>
          <TabList>
            <Tab style={{ color: "#42B00F" }}>Fruits & Vegetables</Tab>
            <Tab style={{ color: "#42B00F" }}>Meat & Fish</Tab>
          </TabList>
          <TabPanel>
            <ConsumerFood />
          </TabPanel>
          <TabPanel>
            <ConsumerFood />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default TabOfFood;
