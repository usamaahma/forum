import React from "react";
import Styles from "../styles/MembersPage.module.css";
import { Row, Col } from "antd";
import LeftSectionOfMembers from "@/components/members/LeftSectionOfMember";
import RightSectionOfMember from "@/components/members/RightSectionOfMember";
import HeroSection from "@/components/HeroSection";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";

function MembersPage() {
  return (
    <div>
      <MainHeader />
      <HeroSection />
      <div style={{ padding: "20px 0px" }}>
        <Row justify="center">
          <Col lg={6}>
            <div className={Styles.centercol}>
              <LeftSectionOfMembers />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <RightSectionOfMember />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default MembersPage;
