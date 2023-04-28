import React from "react";
import Styles from "../styles/MembersPageTwo.module.css";
import { Row, Col } from "antd";
import LeftSectionOfMembers from "@/components/members/LeftSectionOfMember";
import MemberTwoRightSection from "@/components/membertwo/MemberTwoRightSection";

function MembersPageTwo() {
  return (
    <div>
      <div className={Styles.mainland}>
        <Row justify="center">
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
    </div>
  );
}

export default MembersPageTwo;
