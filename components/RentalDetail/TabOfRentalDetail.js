import React from "react";
import Styles from "../../styles/TabOfDetails.module.css";
import { Tabs } from "antd";
import Description from "../BuyAndSellDetail/Description";

function TabOfRentalDetail() {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Description",
            key: "1",
            children: <Description />,
          },
          {
            label: "Features",
            key: "2",
            children: <Description />,
          },
          {
            label: "Write a Review",
            key: "3",
            children: <Description />,
          },
        ]}
      />
    </div>
  );
}

export default TabOfRentalDetail;
