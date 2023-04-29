import React from "react";
import Styles from "../styles/MembersPage.module.css";
import { Row, Col } from "antd";
import LeftSectionOfMembers from "@/components/members/LeftSectionOfMember";
import RightSectionOfMember from "@/components/members/RightSectionOfMember";

function MembersPage() {
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
              <RightSectionOfMember />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MembersPage;
