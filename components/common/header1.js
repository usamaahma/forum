import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";
import Styles1 from "../../styles/FirstHeader.module.css";
import Link from "next/link";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import {
  Switch,
  Button,
  Drawer,
  Layout,
  Menu,
  Input,
  Select,
  Modal,
  Row,
  Col,
  Checkbox,
  Space,
  Dropdown,
  Badge,
  Avatar,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import CheckOutModal from "../checkoutModal/CheckOutModal";

const onChangee = (checked) => {
  console.log(`switch to ${checked}`);
};

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
  const [isBangla, setIsBangla] = useState(false);
  const handleClick = () => {
    setIsBangla(!isBangla);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const { totalCartItems } = useSelector((state) => state.cart);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const dropdownRender = () => [];
  const items = [
    {
      key: "1",
      label: (
        <Link href="./MyAccountPage">
          <button className={Styles.btnaccount}>
            <UserOutlined />
            <p style={{ marginLeft: ".3rem" }}>My Account</p>
          </button>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <button className={Styles.btnaccount1}>
          <LoginOutlined />
          <p style={{ marginLeft: ".3rem" }}>Sign Out</p>
        </button>
      ),
    },
  ];

  return (
    <div>
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
          style={{ marginTop: "1rem" }}
          className={`${Styles.commons} ${Styles.remove1}`}
        >
          <Select
            dropdownRender={dropdownRender}
            defaultValue="Filter"
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
                  ></img>{" "}
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
                  ></img>{" "}
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
                    ></img>{" "}
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
          <Modal
            width={370}
            footer
            open={isModalOpen1}
            onOk={handleOk1}
            onCancel={handleCancel1}
          >
            <CheckOutModal />
          </Modal>
          <Search
            style={{
              width: 280,
         
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
              <img alt="abc" src="../images/drawerchat.png" />
            </div>
            <div className={Styles.imgpp}>
              <Badge showZero count={6} style={{ backgroundColor: "#42B00F" }}>
                <img alt="abc" src="../images/Notification.png" />
              </Badge>
            </div>
            <div className={Styles.imgpp}>
              <Badge
                showZero
                count={totalCartItems}
                // count={1}
                style={{ backgroundColor: "#42B00F" }}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "1.5rem" }}
                  onClick={showModal1}
                />
              </Badge>
            </div>
            <Button className={Styles.buttonuser} onClick={showDrawer}>
              {" "}
              <p>Istiaq</p>
              <Avatar src={<img src="../images/pic.png" alt="avatar" />} />
            </Button>

            <Drawer placement="right" onClose={onClose} open={open}>
              <img
                className={Styles.drawerimg}
                alt="abc"
                src="../images/drawerupper.png"
              ></img>
              <Link href="/MyAccountPage">
                <div className={Styles.sameforall}>
                  <p>My Account</p>
                  <img alt="abc" src="../images/drawerfirst.png"></img>
                </div>
              </Link>
              <Link href="/HomePage">
                <div className={Styles.sameforall}>
                  <p>Home</p>
                  <img alt="abc" src="../images/drawerhome.png"></img>
                </div>{" "}
              </Link>
              <Link href="/DeshiShopPage">
                <div className={Styles.sameforall}>
                  <p>Deshi Shop</p>
                  <img alt="abc" src="../images/drawershop.png"></img>
                </div>{" "}
              </Link>
              <div className={Styles.sameforall} onClick={showModal1}>
                <p>Cart</p>
                <img alt="abc" src="../images/drawercart.png"></img>
              </div>
              <hr style={{ border: "1px solid #E8E8E8" }} />
              <br />
              <div className={Styles.sameforall}>
                <p>Community Member</p>
                <img alt="abc" src="../images/drawerpeople.png"></img>
              </div>{" "}
              <div className={Styles.sameforall}>
                <p>Community Chat</p>
                <img alt="abc" src="../images/drawerchat.png"></img>
              </div>{" "}
              <div className={Styles.sameforall}>
                <p>Follower</p>
                <img alt="abc" src="../images/drawerplus.png"></img>
              </div>{" "}
              <div className={Styles.sameforall}>
                <p>Show me on Community Profile</p>
                <Switch defaultChecked onChange={onChangee} />
              </div>
              <hr style={{ border: "1px solid #E8E8E8" }} />
              <br />
              <div className={Styles.sameforall}>
                <p>Become a Deshi Shop Vendor</p>
                <img alt="abc" src="../images/drawervendor.png"></img>
              </div>
              <hr style={{ border: "1px solid #E8E8E8" }} />
              <br />
              <div className={Styles.sameforall}>
                <p>Language</p>
                <div>
                  <div
                    onClick={handleClick}
                    style={{
                      overflow: "hidden",
                      backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                    }}
                    className={Styles1.langbutton}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "2rem",
                        width: "50%",
                        height: "100%",
                        fontSize: ".8rem",
                        borderRadius: "3px",
                        backgroundColor: isBangla ? "#FFFFFF" : "#42B00F",
                        color: isBangla ? "black" : "white",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      Eng
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "2rem",
                        width: "50%",
                        height: "100%",
                        fontSize: ".8rem",
                        borderRadius: "3px",
                        backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                        color: isBangla ? "white" : "black",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      বাংলা
                    </div>
                  </div>{" "}
                </div>
              </div>
              <hr style={{ border: "1px solid #E8E8E8" }} />
              <br />
              <div className={Styles.newsignout}>
                <button className={Styles.btnaccount1}>
                  <LoginOutlined />
                  <p style={{ marginLeft: ".3rem" }}>Sign Out</p>
                </button>
              </div>
            </Drawer>
          </div>
        </Menu>
      </Header>
    </div>
  );
}

export default Header2;
