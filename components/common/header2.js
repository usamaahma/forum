import React from "react";
import Styles from "../../styles/Header.module.css";
import { Button, Layout, Menu } from "antd";
import Link from "next/link";
const { Header } = Layout;

function Header3() {
  return (
    <div
      className={`${Styles.Headerthree} ${Styles.remove1}`}
      style={{ marginBottom: "2rem", height: "3rem" }}
    >
      <Header
        style={{
          backgroundColor: "#151515",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "3rem",
        }}
      >
        <div>
          <Link href="/landingPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
                marginTop: "1rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Home</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Menu
            bordered="false"
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
              height: "2rem",
              marginTop: "1rem",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            // items={items1}
          >
            <p>Deshi Shop</p>
          </Menu>
        </div>
        <div>
          <Menu
            bordered="false"
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
              height: "2rem",
              marginTop: "1rem",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            // items={items1}
          >
            <p>Deshi Service</p>
          </Menu>
        </div>
        <div>
          <Menu
            bordered="false"
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
              height: "2rem",
              marginTop: "1rem",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            // items={items1}
          >
            <p>Buy & Sell</p>
          </Menu>
        </div>
        <div>
          <Menu
            bordered="false"
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
              height: "2rem",
              marginTop: "1rem",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            // items={items1}
          >
            <p>Rental</p>
          </Menu>
        </div>
        <div>
          <Menu
            bordered="false"
            className={Styles.gapheaderthreenav}
            style={{
              backgroundColor: "#151515",
              color: "white",
              height: "2rem",
              marginTop: "1rem",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            // items={items1}
          >
            <p>Job</p>
          </Menu>
        </div>
        <div>
          <Link href="/NewsPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
                marginTop: "1rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>News</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="/events">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
                marginTop: "1rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Event</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="/landingPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
                marginTop: "1rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Forum</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="/BlogPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
                marginTop: "1rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Blog</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Button className={Styles.buttonthree}>
            <img src="../images/Plus.png" alt="abc" />
            Post
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default Header3;
