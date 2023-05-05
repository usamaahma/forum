import React from "react";
import Styles from "../styles/MembersPageTwo.module.css";
import { Row, Col } from "antd";
import LeftSectionOfMembers from "@/components/members/LeftSectionOfMember";
import MemberTwoRightSection from "@/components/membertwo/MemberTwoRightSection";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import MemberHeroSection from "@/components/members/MemberHeroSection";

function MembersPageTwo() {
  return (
    <div>
      <MainHeader />
      <MemberHeroSection />
      <div style={{ padding: "20px 0px" }}>
        <Row justify="center" className={Styles.mbree}>
          <Col lg={6}>
            <div className={Styles.centercol}>
              <LeftSectionOfMembers />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <MemberTwoRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default MembersPageTwo;
