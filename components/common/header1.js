import React from "react";
import Styles from "../../styles/Header.module.css";
import { Layout, Menu, Input, Button, Dropdown, Space, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

function Header2() {
  return (
    <div>
      {" "}
      <Layout>
        <Header style={{ backgroundColor: "white" }} className={Styles.headerr}>
          <Menu theme="light" mode="horizontal" className={Styles.commons}>
            <img className={Styles.googlepic} src="../images/google.png" />
          </Menu>
          <Menu theme="light" mode="horizontal" className={Styles.commons}>
            <Dropdown menu={menuProps}>
              <Button className={Styles.dropdown}>
                <Space>
                  Filter
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Search
              style={{
                width: 280,
                borderRadius: "4px 0 0 4px",
                borderLeft: "none",
                border: "1px solid #42B00F",
              }}
              placeholder="Search........."
              onSearch={onSearch}
              enterButton={
                <Button
                  style={{
                    backgroundColor: "#42B00F",
                    border: "1px solid #42B00F",
                  }}
                >
                  <SearchOutlined style={{ color: "white" }} />
                </Button>
              }
            />
          </Menu>
          <Menu theme="light" mode="horizontal" className={Styles.commons}>
            <div className={Styles.menudiv4}>
              <div className={Styles.menudiv5}>
                {" "}
                <img src="../images/Heart.png" className={Styles.iconsss5} />
                <p className={Styles.iconsss}>Which Lists</p>
              </div>
              <div className={Styles.menudiv5}>
                {" "}
                <img src="../images/Cart.png" />
                <p className={Styles.iconsss}> Cart</p>
              </div>
              <div className={Styles.menudiv5}>
                {" "}
                <img src="../images/User.png" />
                <p className={Styles.iconsss}>Sign In</p>
              </div>
              <div className={Styles.menudiv5}>
                {" "}
                <img className={Styles.notificationss} src="../images/Notification.png" />
              </div>
            </div>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Header2;
