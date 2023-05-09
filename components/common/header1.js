import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";

import {
  Layout,
  Menu,
  Input,
  Button,
  Select,
  Modal,
  Row,
  Col,
  Checkbox,
  Space,
  Dropdown,
} from "antd";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const { Header } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
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
  const dropdownRender = () => [];

  return (
    <div>
      {" "}
      <Header style={{ backgroundColor: "white" }} className={Styles.headerr}>
        <Menu
          theme="light"
          mode="horizontal"
          className={Styles.commons}
          bordered="false"
        >
          <img 
            className={Styles.googlepic}
            src="../images/bongodesh.png"
            alt="abc"
          />
        </Menu>
        <br />
        <Menu
          theme="light"
          mode="horizontal"
          style={{marginTop:"1rem"}}
          className={`${Styles.commons} ${Styles.remove1}`}
        >
          <Select
            dropdownRender={dropdownRender}
            defaultValue="filter"
            onClick={showModal}
          />
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={800}
          >
            <Row className={Styles.rowssscolmnss}>
              <Col span={12}>
                <div
                  className={Styles.colflex}
                  style={{ marginLeft: "-15rem" }}
                >
                  <img 
                    style={{ width: " 1rem", height: "1rem" }}
                    src="../images/Categories.png"
                    alt="abc"
                  ></img >{" "}
                  <p style={{ color: "#42B00F" }}>By Category</p>
                </div>
                <Row>
                  <Col
                    style={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Checkbox
                      className={Styles.checkbx}
                      style={{ marginLeft: ".5rem" }}
                      onChange={onChange}
                    >
                      Deshi Shop
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Buy & Sell
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Job
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Event
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Blog
                    </Checkbox>
                  </Col>
                  <Col
                    style={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Checkbox
                      className={Styles.checkbx1}
                      style={{ marginLeft: ".5rem" }}
                      onChange={onChange}
                    >
                      Deshi Service
                    </Checkbox>
                    <Checkbox className={Styles.checkbx1} onChange={onChange}>
                      Rental
                    </Checkbox>
                    <Checkbox className={Styles.checkbx1} onChange={onChange}>
                      News
                    </Checkbox>
                    <Checkbox className={Styles.checkbx1} onChange={onChange}>
                      Forum
                    </Checkbox>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                {" "}
                <div className={Styles.colflex} style={{ marginLeft: "-4rem" }}>
                  {" "}
                  <img 
                    style={{ width: " 1rem", height: "1rem" }}
                    src="../images/Group.png"
                    alt="abc"
                  ></img >{" "}
                  <p style={{ color: "#42B00F" }}>Sub Category</p>
                </div>
                <Row>
                  {" "}
                  <Col
                    style={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Checkbox
                      className={Styles.checkbx}
                      style={{ marginLeft: ".5rem" }}
                      onChange={onChange}
                    >
                      Consumer Food
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Men’s Clothing
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Women’s Clothing
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Fashion & Beauty
                    </Checkbox>
                    <Checkbox className={Styles.checkbx} onChange={onChange}>
                      Home & Living
                    </Checkbox>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                {" "}
                <Col>
                  <div
                    className={Styles.colflex}
                    style={{ marginLeft: "-8rem" }}
                  >
                    {" "}
                    <img 
                      alt="abc"
                      style={{ width: " 1rem", height: "1rem" }}
                      src="../images/Locatin.png"
                    ></img >{" "}
                    <p style={{ color: "#42B00F" }}>Location</p>
                  </div>
                  <Row
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <Col>
                      {" "}
                      <Dropdown menu={menuProps}>
                        <Button>
                          <Space>
                            Stats
                            <DownOutlined />
                          </Space>
                        </Button>
                      </Dropdown>
                    </Col>
                    <Col>
                      {" "}
                      <Dropdown menu={menuProps} style={{ width: "8rem" }}>
                        <Button>
                          <Space>
                            City
                            <DownOutlined />
                          </Space>
                        </Button>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Modal>
          <Search
            style={{
              width: 280,
              borderRadius: "4px 0 0 4px",
              borderLeft: "none",
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
          ></Search>
        </Menu>

        <Menu
          theme="light"
          mode="horizontal"
          className={`${Styles.commons} ${Styles.remove1}`}
          bordered="false"
        >
          <div className={Styles.menudiv4}>
            <div className={Styles.imgpp}>
              <img  alt="abc" src="../images/Cart.png" />
              <p className={Styles.txttttst}>Cart</p>
            </div>
            <div className={Styles.imgpp}>
              <img 
                className={Styles.ico}
                alt="abc"
                src="../images/Group (1).png"
              />
              <p className={Styles.txttttst}>My Account</p>
            </div>{" "}
            <div className={Styles.imgpp}>
              <img  alt="abc" src="../images/Notification.png" />
            </div>
          </div>
        </Menu>
      </Header>
    </div>
  );
}

export default Header2;
