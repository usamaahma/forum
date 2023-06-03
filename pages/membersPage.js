import React from "react";
import Styles from "../styles/MembersPage.module.css";
import { Row, Col } from "antd";
import LeftSectionOfMembers from "@/components/members/LeftSectionOfMember";
import RightSectionOfMember from "@/components/members/RightSectionOfMember";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import MemberHeroSection from "@/components/members/MemberHeroSection";

function MembersPage() {
  return (
    <div>
      <MainHeader />
      <MemberHeroSection />
      <div style={{ padding: "20px 0px" }}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <LeftSectionOfMembers />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
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
