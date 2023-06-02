import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightFollowed.module.css";
import Forumcard from "./Forumcard";
import Eventcard from "./Eventcard1";
import Blogcard from "./Blogcard1";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function RightPost() {
  return (
    <div>
      <div>
        <Tabs onChange={callback} type="card" size="small">
          <TabPane tab="Forum" key="1" className={Styles.blscktext}>
            {" "}
            <Forumcard />
          </TabPane>
          <TabPane tab="Event" key="2" className={Styles.blscktext}>
            <Eventcard />{" "}
          </TabPane>
          <TabPane tab="Blog" key="3" className={Styles.blscktext}>
            <Blogcard />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightPost;
