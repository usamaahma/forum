import React from "react";
import Styles from "../../styles/MenWomenTab.module.css";
// import { Tabs } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Post from "../../public/images/image 79.png";
import Image from "next/image";
import FashionBeauty from "./FashionBeauty";

function TabOfFashion() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.contdiv}>
        <h3 className={Styles.foodtext}>Fashion & Beauty</h3>
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
            <Tab style={{ color: "#42B00F" }}>Sunglass & Eyewear</Tab>
            <Tab style={{ color: "#42B00F" }}>Cosmetics & Skin</Tab>
            <Tab style={{ color: "#42B00F" }}>Gents Watch</Tab>
          </TabList>
          <TabPanel>
            <FashionBeauty />
          </TabPanel>
          <TabPanel>
            <FashionBeauty />
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <Image src={Post} alt="" className={Styles.postsize} />
      </div>
    </div>
  );
}

export default TabOfFashion;
