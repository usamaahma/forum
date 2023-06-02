import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightReview.module.css";
import ProductReview from "./ProductReview";
import ListingReview from "./ListingReview";

function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;

function RightReview() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="Product" key="1" className={Styles.blscktext}>
            <ProductReview />
          </TabPane>
          <TabPane tab="Listing" key="2" className={Styles.blscktext}>
            <ListingReview />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightReview;
