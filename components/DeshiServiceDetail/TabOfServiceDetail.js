import React from "react";
import Styles from "../../styles/TabOfDetails.module.css";
import { Tabs } from "antd";
import Description from "../BuyAndSellDetail/Description";

function TabOfServiceDetails({ data }) {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Description",
            key: "1",
            children: (
              <div>
                <p style={{ width: "40rem" }}>{data.metaDescription}</p>
              </div>
            ),
          },
          {
            label: "Features",
            key: "2",
            children: <div>{data.feature}</div>,
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

export default TabOfServiceDetails;
