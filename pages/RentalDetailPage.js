import React from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroRentalDetail from "@/components/RentalDetail/HeroRentalDetail";
import LeftRentalDetail from "@/components/RentalDetail/LeftRentalDetail";
import RightRentalDetail from "@/components/RentalDetail/RightRentalDetail";
import CarouselRentalDetail from "@/components/RentalDetail/CarosuelRentalDetail";
function RentalDetailPage() {
  return (
    <div>
      <MainHeader />
      <HeroRentalDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftRentalDetail />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightRentalDetail />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselRentalDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RentalDetailPage;
