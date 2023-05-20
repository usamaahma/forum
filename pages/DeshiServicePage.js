import React from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionOfDeshiSer from "@/components/DeshiServices/HeroSectionOfDeshiSer";
import ImageSectionOfDeshi from "@/components/DeshiServices/ImageSectionOfDeshi";
function DeshiServicePage() {
  return (
    <div>
      <MainHeader />
      <HeroSectionOfDeshiSer />
      <ImageSectionOfDeshi />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercoldeshi}></div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi}></div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiServicePage;
