import React from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroJobDetail from "@/components/JobDetail/HeroJobDetail";
import LeftJobDetail from "@/components/JobDetail/LeftJobDetail";
import RightJobDetail from "@/components/JobDetail/RightJobDetail";
import CarouselJobDetail from "@/components/JobDetail/CarouselJobDetail";
function JobDetailPage() {
  return (
    <div>
      <MainHeader />
      <HeroJobDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftJobDetail />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightJobDetail />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselJobDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetailPage;
