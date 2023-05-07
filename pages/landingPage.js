import React from "react";
import Styles from "../styles/LandingPage.module.css";
import { Row, Col } from "antd";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSection from "@/components/HeroSection";

function LandingPage() {
  return (
    <div>
      <MainHeader />
      <HeroSection />
      <div
        // className={Styles.mainland}
        style={{ marginTop: "1rem", padding: "20px 0px" }}
      >
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <LeftSection />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
              <RightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
