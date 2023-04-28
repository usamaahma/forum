import React from "react";
import Styles from "../styles/LandingPage.module.css";
import { Row, Col } from "antd";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

function LandingPage() {
  return (
    <div>
      <div className={Styles.mainland}>
        <Row justify="center">
          <Col lg={6}>
            <div className={Styles.centercol}>
              <LeftSection />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <RightSection />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
