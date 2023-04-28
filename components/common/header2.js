import React from "react";
import Styles from "../../styles/Header.module.css";

import { Button, Layout, Menu, theme } from "antd";
const { Header } = Layout;
const items1 = [
  "Home",
  "Deshi Shop",
  "Deshi Service",
  "Buy & Sell",
  "Rental",
  "Job",
  "News",
  "Event",
  "Forum",
  "Blog",
].map((key) => ({
  key,
  label: ` ${key}`,
}));

function Header3() {
  return (
    <div className={Styles.Headerthree}>
      {" "}
      <Header
        style={{
          backgroundColor: "#151515",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <Menu
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
            }}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </div>
        <div>
          {" "}
          <Button className={Styles.buttonthree}>
            <img src="../images/Plus.png" />
            Post
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default Header3;
