import React from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroDeshiDetail from "@/components/DeshiServiceDetail/HeroDeshiDetail";
import LeftServiceDetail from "@/components/DeshiServiceDetail/LeftServiceDetail";
import RightServiceDetail from "@/components/DeshiServiceDetail/RightServiceDetail";
import CarouselDeshiService from "@/components/DeshiServiceDetail/CarouselDeshiService";
function DeshiServiceDetailPage() {
  return (
    <div>
      <MainHeader />
      <HeroDeshiDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftServiceDetail />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightServiceDetail />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselDeshiService />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiServiceDetailPage;
