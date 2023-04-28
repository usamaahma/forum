import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import LeftSection from "@/components/LeftSection";
import RightSectionOfTopic from "@/components/RightSectionOfTopic";

function TopicPage() {
  return (
    <div>
      <div className={Styles.mainland}>
        <Row justify="center">
          <Col lg={6}>
            <div className={Styles.centercol}>
              <LeftSection />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <RightSectionOfTopic />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopicPage;
