import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import LeftSection from "@/components/LeftSection";
import RightSectionOfTopic from "@/components/RightSectionOfTopic";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSection from "@/components/HeroSection";

function TopicPage() {
  return (
    <div>
      <MainHeader />
      <HeroSection />
      <div className={Styles.mainland11}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <LeftSection />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol1}>
              <RightSectionOfTopic />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default TopicPage;
