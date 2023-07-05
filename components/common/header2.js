import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";
import { Button, Layout, Menu, Modal } from "antd";
import Link from "next/link";
const { Header } = Layout;

function Header3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          <Link href="/HomePage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
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
          <Link href="/DeshiShopPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Deshi Shop</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="/DeshiServicePage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Deshi Service</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="./BuyAndSellPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Buy & Sell</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="./RentalPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Rental</p>
            </Menu>
          </Link>
        </div>
        <div>
          <Link href="./JobPage">
            <Menu
              bordered="false"
              className={Styles.gapheaderthreenav}
              style={{
                backgroundColor: "#151515",
                color: "white",
                height: "2rem",
              }}
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              // items={items1}
            >
              <p>Job</p>
            </Menu>
          </Link>
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
          <Modal
            title="Post in "
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Link href="/DeshiServiceForm">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Deshi Service
                </Button>
              </Link>
              <Link href="/BuySellForm">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Buy & Sell
                </Button>
              </Link>
              <Link href="/RentalForm">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Rental
                </Button>
              </Link>
              <Link href="/JobForm">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Job
                </Button>
              </Link>
              <Link href="/EventsFormPage">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Event
                </Button>
              </Link>
              <Link href="/BlogFormPage">
                <Button
                  style={{
                    backgroundColor: "#42b00f",
                    color: "white",
                    marginTop: "1rem",
                    width: "10rem",
                  }}
                >
                  Blog
                </Button>
              </Link>
            </div>
          </Modal>
          <Button className={Styles.buttonthree} onClick={showModal}>
            <img src="../images/Plus.png" alt="abc" />
            Post
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default Header3;
