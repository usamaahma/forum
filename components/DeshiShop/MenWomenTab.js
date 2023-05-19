import React from "react";
import Styles from "../../styles/MenWomenTab.module.css";
// import { Tabs } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenWomenClothing from "./MWClothing";
import Post from "../../public/images/image 77.png";
import Image from "next/image";

function MenWomenTab() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.contdiv}>
        <h3 className={Styles.foodtext}>Men’s & Women’s Clothing</h3>
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
            <Tab style={{ color: "#42B00F" }}>Men</Tab>
            <Tab style={{ color: "#42B00F" }}>Women</Tab>
          </TabList>
          <TabPanel>
            <MenWomenClothing />
          </TabPanel>
          <TabPanel>
            <MenWomenClothing />
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <Image src={Post} alt="" className={Styles.postsize} />
      </div>
    </div>
  );
}

export default MenWomenTab;
