import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Styles from "../../styles/footer.module.css";
import { Row, Col, Button } from "antd";

function Footer() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handlePClick = (index) => {
    setClickedIndex(index);
  };

  const getParaStyle = (index) => {
    if (index === clickedIndex) {
      return { color: "#42B00F" };
    } else {
      return {};
    }
  };
  return (
    <div className={Styles.container}>
      <Container>
        <Row className={Styles.rowcol}>
          <Col className={Styles.firstcol}>
            <div>
              {" "}
              <img
                className={Styles.googleimg}
                src="../images/google.png"
                alt="abc"
              />
            </div>
            <div className={Styles.scdnfirstcol}>
              Bo is the biggest online platform lorm
              <br /> ipsm dkfhkdfsh lkdfhslkdfhskl dfhklf
              <br /> dskldfhsklhdfskldfhkldfhskldfsh
            </div>
            <div className={Styles.trddiv}>
              <img src="../images/twitter1.png" alt="abc"></img>
              <img src="../images/facebgroup.png" alt="abc"></img>
              <img src="../images/instagroup.png" alt="abc"></img>
              <img src="../images/linkdingroup.png" alt="abc"></img>
            </div>
          </Col>
          <Col>
            <div>
              <div className={Styles.guide}>Guide & Tips</div>
              <div className={Styles.para}>
                <p className={Styles.para1}>How to Listing</p>
                <p className={Styles.para1}>How to Shopping</p>
                <p className={Styles.para1}>How to Blog Post</p>
                <p className={Styles.para1}>How to Create Store</p>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div>
              <div className={Styles.guide}>Information</div>
              <div className={Styles.para}>
                <p
                  className={Styles.para1}
                  style={getParaStyle(0)}
                  onClick={() => handlePClick(0)}
                >
                  About Us
                </p>
                <p
                  className={Styles.para1}
                  style={getParaStyle(1)}
                  onClick={() => handlePClick(1)}
                >
                  Blog & Articles
                </p>
                <p
                  className={Styles.para1}
                  style={getParaStyle(2)}
                  onClick={() => handlePClick(2)}
                >
                  Promote Your Ad
                </p>
                <p
                  className={Styles.para1}
                  style={getParaStyle(3)}
                  onClick={() => handlePClick(3)}
                >
                  Banner Advertising
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div className={Styles.guide}>Help & Support</div>
              <div className={Styles.para}>
                <p className={Styles.para1}>FAQ</p>
                <p className={Styles.para1}>Contact Us</p>
                <p className={Styles.para1}>Privacy Policy</p>
                <p className={Styles.para1}>Terms & Conditions</p>
                <div className={Styles.lstttdiv}>
                  <img
                    className={`${Styles.imggg} ${Styles.downloadapp}`}
                    src="../images/apple.png"
                    alt="abc"
                  />
                  <Button className={Styles.downloadap}>Download App</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={Styles.lastrow}>
          <Col>
            {" "}
            <p className={Styles.bottom}> © All Copyright Bon 2025.</p>{" "}
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col className={Styles.lstttdiv}>
            {" "}
            <img
              className={Styles.newimg}
              src="data:image/png;base64,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"
              alt="abc"
            ></img>
            <img
              className={Styles.newimg}
              src="data:image/png;base64,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"
              alt="abc"
            ></img>
            <img
              className={Styles.newimg}
              src="data:image/png;base64,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"
              alt="abc"
            ></img>
            <img
              className={Styles.newimg}
              src="data:image/png;base64,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"
              alt="abc"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
