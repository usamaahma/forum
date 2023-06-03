import React from "react";
import { Tabs, Select } from "antd";
import Styles from "../../styles/RightComments.module.css";
import NewsComment from "./NewsComment";
import EventComment from "./EventComment";
import ForumComment from "./ForumComment";
import BlogComments from "./BlogComments";

function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;

function RightComments() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="News" key="1" className={Styles.blscktext}>
            {" "}
            <NewsComment />
          </TabPane>
          <TabPane tab="Event" key="2" className={Styles.blscktext}>
            <EventComment />
          </TabPane>
          <TabPane tab="Forum" key="3" className={Styles.blscktext}>
            <ForumComment />
          </TabPane>
          <TabPane tab="Blog" key="4" className={Styles.blscktext}>
            <BlogComments />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightComments;
