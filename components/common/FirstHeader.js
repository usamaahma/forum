import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LoginOutlined } from "@ant-design/icons";
import { Switch, Button, Drawer, Badge } from "antd";
import Styles from "../../styles/FirstHeader.module.css";

const onChangee = (checked) => {
  console.log(`switch to ${checked}`);
};

function FirstHeader() {
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

  return (
    <div>
      <Navbar variant="light" className={Styles.Navbarrrse}>
        <Container className={Styles.cntainer}>
          <div className={Styles.twobrand}>
            <div className={Styles.bongoos}>
              <img src="../images/bongodesh.png" alt="abc" />
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
                <div className={Styles.sameforall}>
                  <p>My Account</p>
                  <img alt="abc" src="../images/drawerfirst.png"></img>
                </div>
                <div className={Styles.sameforall}>
                  <p>Home</p>
                  <img alt="abc" src="../images/drawerhome.png"></img>
                </div>{" "}
                <div className={Styles.sameforall}>
                  <p>Deshi Shop</p>
                  <img alt="abc" src="../images/drawershop.png"></img>
                </div>{" "}
                <div className={Styles.sameforall}>
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
                      className={Styles.langbutton}
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
              <Button className={Styles.postbutt}>Post</Button>
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
