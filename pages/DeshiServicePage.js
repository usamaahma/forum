import React from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionOfDeshiSer from "@/components/DeshiServices/HeroSectionOfDeshiSer";
import ImageSectionOfDeshi from "@/components/DeshiServices/ImageSectionOfDeshi";
import LeftSectionDeshi from "@/components/DeshiServices/LeftSectionDeshi";
import RightSectionDeshi from "@/components/DeshiServices/RightSectionDeshi";
function DeshiServicePage() {
  return (
    <div>
      <MainHeader />
      <HeroSectionOfDeshiSer />
      <ImageSectionOfDeshi />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercoldeshi}>
              <LeftSectionDeshi />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi1}>
              <RightSectionDeshi />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiServicePage;
