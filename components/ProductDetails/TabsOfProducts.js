import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/TabsOfProducts.module.css";
import VendorInfo from "./VendorInfo";
import Reviews from "./Reviews";
function TabsOfProducts() {
  return (
    <div className={Styles.centertab}>
      <div>
        <Tabs
          className={Styles.tabsize}
          defaultActiveKey="1"
          items={[
            {
              label: "Description ",
              key: "1",
              children:
                "Contrary to popular belief, Lore m Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
            },
            {
              label: "Vendor Info ",
              key: "2",
              children: <VendorInfo />,
            },
            {
              label: "Reviews",
              key: "3",
              children: <Reviews />,
            },
            {
              label: "Shipping & Delivery",
              key: "4",
              children: "knlnnfw",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default TabsOfProducts;
