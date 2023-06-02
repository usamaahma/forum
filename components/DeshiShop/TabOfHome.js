import React from "react";
import Styles from "../../styles/TabOfHome.module.css";
// import { Tabs } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeLiving from "./HomeLiving";

function TabOfHome() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.tabdiv}>
        <h3 className={Styles.context}>Home & Living</h3>
        <div className={Styles.greenline}></div>
        {/* <Tabs
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
        /> */}
      </div>
      <div dir="rtl" className={Styles.widthtab}>
        <Tabs direction={"rtl"}>
          <TabList>
            <Tab style={{ color: "#42B00F" }}>Furniture</Tab>
            <Tab style={{ color: "#42B00F" }}>Flower & Plant</Tab>
            <Tab style={{ color: "#42B00F" }}>Kitchen & Dining Items</Tab>
            <Tab style={{ color: "#42B00F" }}>Home & Office Appliance</Tab>
          </TabList>
          <TabPanel>
            <HomeLiving />
          </TabPanel>
          <TabPanel>
            <HomeLiving />
          </TabPanel>
          <TabPanel>
            <HomeLiving />
          </TabPanel>
          <TabPanel>
            <HomeLiving />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default TabOfHome;
