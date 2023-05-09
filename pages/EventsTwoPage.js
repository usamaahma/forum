import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import EventLeftSection from "@/components/eventPageTwo/EventLeftSection";
import EventRightSection from "@/components/eventPageTwo/EventRightSection";
import EventHeroSection from "@/components/eventPageTwo/EventHeroSection";

function EventsTwoPage() {
  return (
    <div>
      <MainHeader />
      <EventHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <EventLeftSection />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
              <EventRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default EventsTwoPage;
