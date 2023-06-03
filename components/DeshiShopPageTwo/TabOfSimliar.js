import React from "react";
import Styles from "../../styles/TabOfSimliar.module.css";
// import { Tabs } from "antd";
import ProductSim from "./ProductSim";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabOfSimliar() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.contdiv}>
        <h3 className={Styles.foodtext}>Fashion & Beauty</h3>
        <div className={Styles.greenline}></div>
      </div>
      <div dir="rtl" className={Styles.divtab}>
        {/* <Tabs 
          centered
          className={Styles.ant}
          defaultActiveKey="1"
          items={[
            {
              label: "Men",
              key: "1",
              children: <ProductSim />,
            },
            {
              label: "Women",
              key: "2",
              children: <ProductSim />,
            },
          ]}
        /> */}

        <Tabs direction={"rtl"}>
          <TabList>
            <Tab style={{ color: "#42B00F" }}>Men</Tab>
            <Tab style={{ color: "#42B00F" }}>Women</Tab>
          </TabList>
          <TabPanel>
            <ProductSim />
          </TabPanel>
          <TabPanel>
            <ProductSim />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default TabOfSimliar;
