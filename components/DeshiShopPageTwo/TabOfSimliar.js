import React from "react";
import Styles from "../../styles/TabOfSimliar.module.css";
import { Tabs } from "antd";
import ProductSim from "./ProductSim";

function TabOfSimliar() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.tabdiv}>
        <h3 className={Styles.context}>Similar product</h3>
        <div className={Styles.greenline}></div>
        <Tabs
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
        />
      </div>
    </div>
  );
}

export default TabOfSimliar;
