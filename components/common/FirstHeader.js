import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LoginOutlined } from "@ant-design/icons";
import { Switch, Button, Drawer, Badge, Modal } from "antd";
import CheckOutModal from "../checkoutModal/CheckOutModal";
import Styles from "../../styles/FirstHeader.module.css";
import Link from "next/link";

const onChangee = (checked) => {
  console.log(`switch to ${checked}`);
};

function FirstHeader() {
  const [isBangla, setIsBangla] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  return (
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

      <Modal
        width={370}
        footer
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <CheckOutModal />
      </Modal>

      <Navbar variant="light" className={Styles.Navbarrrse}>
        <Container className={Styles.cntainer}>
          <div className={Styles.twobrand}>
            <div className={Styles.bongoos}>
              <img className={Styles.bongooos} src="../images/bongodesh.png" alt="abc" />
            </div>
            <div className={Styles.drawerdis}>
              <div className={Styles.buttonusercontainer}>
                <Button className={Styles.buttonuser} onClick={showDrawer}>
                  <img alt="abc" src="../images/threeelines.png" />
                </Button>
              </div>

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
                      className={Styles.langbutton1}
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
            <Navbar.Brand>
              <div className={Styles.displayflex}>
                <img src="../images/Phone.png" alt="abc" />
                <p className={Styles.number}>123-345-678</p>
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className={Styles.displayflex}>
                <img src="../images/emailnav.png" alt="abc" />
                <p className={Styles.number}>bongodeshi@gmail.com</p>
              </div>
            </Navbar.Brand>
          </div>
          <Nav className={Styles.gapbuttons}>
            <div
              onClick={handleClick}
              style={{
                overflow: "hidden",
                backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
              }}
              className={Styles.langbutton}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                  fontSize: ".8rem",
                  borderRadius: "3px",
                  backgroundColor: isBangla ? "#FFFFFF" : "#42B00F",
                  color: isBangla ? "black" : "white",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                Eng
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                  fontSize: ".8rem",
                  borderRadius: "3px",
                  backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                  color: isBangla ? "white" : "black",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                বাংলা
              </div>
            </div>{" "}
            <div className={Styles.not}>
              <Button className={Styles.postbutt} onClick={showModal}>
                Post
              </Button>
            </div>
            <Badge
              showZero
              count={1}
              style={{ backgroundColor: "#42B00F" }}
              className={Styles.not}
            >
              <img alt="abc" src="../images/drawerchat.png" />
            </Badge>
            <Badge
              showZero
              count={1}
              style={{ backgroundColor: "#42B00F" }}
              className={Styles.not}
            >
              <img src="../images/Notification.png" alt="aabc" />
            </Badge>
            <div className={Styles.logoos}>
              <div>
                {" "}
                <img src="../images/twitter.png" alt="abc" />
              </div>
              <div>
                {" "}
                <img src="../images/faceb.png" alt="abc" />
              </div>
              <div>
                {" "}
                <img src="../images/insta.png" alt="abc" />
              </div>
              <div>
                {" "}
                <img src="../images/linkdin.png" alt="abc" />
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default FirstHeader;
