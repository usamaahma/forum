import React from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionJob from "@/components/Job/HeroSectionJob";
import LeftSectionJob from "@/components/Job/LeftSectionJob";
import RightSectionJob from "@/components/Job/RightSectionJob";
import ImageOfJob from "@/components/Job/ImageOfJob";
function JobPage() {
  return (
    <div>
      <MainHeader />
      <HeroSectionJob />
      <ImageOfJob />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercoldeshi}>
              <LeftSectionJob />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi1}>
              <RightSectionJob />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default JobPage;
