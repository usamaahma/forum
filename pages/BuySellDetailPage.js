import React from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import LeftSectionBuyDetail from "@/components/BuyAndSellDetail/LeftSectionBuyDetail";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroBuyDetail from "@/components/BuyAndSellDetail/HeroBuyDetail";
import RightSectionBuyDetail from "@/components/BuyAndSellDetail/RightSectionBuyDetail";
import CarouselDetail from "@/components/BuyAndSellDetail/CarouselDetail";
function BuySellDetailPage() {
  return (
    <div>
      <MainHeader />
      <HeroBuyDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftSectionBuyDetail />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightSectionBuyDetail />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuySellDetailPage;
