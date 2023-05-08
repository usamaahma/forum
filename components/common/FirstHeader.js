import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Styles from "../../styles/FirstHeader.module.css";

function FirstHeader() {
  const [isBangla, setIsBangla] = useState(false);
  const handleClick = () => {
    setIsBangla(!isBangla);
  };

  return (
    <div>
      <Navbar  variant="light" className={Styles.Navbarrrse}>
        <Container>
          <div className={Styles.twobrand}>
            <div className={Styles.bongoos}>
              <img src="../images/bongodesh.png" alt="abc" />
            </div>
            <Navbar.Brand>
              <div className={Styles.displayflex}>
                <img src="../images/phone.png" alt="abc" />
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
              <img src="../images/notification.png" alt="abc" />
            </div>
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
