import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import HeroSeller from "@/components/SellerRoom/HeroSeller";
import RightSeller from "@/components/SellerRoom/RighSeller";
function MySellerPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSeller />
        <br />
        <br />
        <div>
          <Row justify="center">
            <Col>
              <div className={Styles.centercolorder}>
                <LeftOrder />
              </div>
            </Col>
            <Col>
              <div className={Styles.centercolorder1}>
                <RightSeller />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MySellerPage;
