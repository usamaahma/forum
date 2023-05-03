import React from "react";
import Styles from "../styles/MembersPage.module.css";
import { Row, Col } from "antd";

import RightSectionOfEvents from "@/components/eventpage/RightSectionOfEvents";
import LeftSectionOfEvents from "@/components/eventpage/LeftSectionOfEvents";

function EventsPage() {
  return (
    <div>
      <div className={Styles.mainland}>
        <Row justify="center">
          <Col lg={6}>
            <div className={Styles.centercol}>
              <LeftSectionOfEvents />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <RightSectionOfEvents />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EventsPage;
