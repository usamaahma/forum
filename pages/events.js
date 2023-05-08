import React from "react";
import Styles from "../styles/MembersPage.module.css";
import { Row, Col } from "antd";
import RightSectionOfEvents from "@/components/eventpage/RightSectionOfEvents";
import LeftSectionOfEvents from "@/components/eventpage/LeftSectionOfEvents";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import EventsHeroSection from "@/components/eventpage/EventsHeroSection";

function EventsPage() {
  return (
    <div>
      <MainHeader />
      <EventsHeroSection />
      <br />
      <div className={Styles.mainland}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <LeftSectionOfEvents />
            </div>
          </Col>
          <Col lg={14}>
            <div className={Styles.centercol12}>
              <RightSectionOfEvents />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default EventsPage;
