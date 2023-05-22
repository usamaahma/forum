import React from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import ImageOfRental from "@/components/Rental/ImageOfRental";
import LeftSectionRental from "@/components/Rental/LeftSectionRental";
import RightSectionRental from "@/components/Rental/RightSectionRental";
import HeroSectionRental from "@/components/Rental/HeroSectionRental";
function RentalPage() {
  return (
    <div>
      <MainHeader />
      <HeroSectionRental />
      <ImageOfRental />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercoldeshi}>
              <LeftSectionRental />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi1}>
              <RightSectionRental />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default RentalPage;
