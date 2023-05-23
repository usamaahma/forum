import React from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import LeftSectionBuyDetail from "@/components/BuyAndSellDetail/LeftSectionBuyDetail";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroBuyDetail from "@/components/BuyAndSellDetail/HeroBuyDetail";
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
              <LeftSectionBuyDetail />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BuySellDetailPage;
