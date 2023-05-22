import React from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import RightSectionOfBuy from "@/components/BuyAndSell/RightSectionOfBuy";
import LeftSectionOfBuy from "@/components/BuyAndSell/LeftSectionOfBuy";
import ImageSectionOfBuy from "@/components/BuyAndSell/ImageSectionOfBuy";
import HeroSectionOfBuy from "@/components/BuyAndSell/HeroSectionOfBuy";
function BuyAndSellPage() {
  return (
    <div>
      <MainHeader />
      <HeroSectionOfBuy />
      <ImageSectionOfBuy />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercoldeshi}>
              <LeftSectionOfBuy />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi1}>
              <RightSectionOfBuy />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BuyAndSellPage;
