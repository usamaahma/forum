import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "../components/common/mainHeader";
import Footer from "../components/common/footer";
import { Col, Row } from "antd";
import HeroCoupon from "@/components/MyCoupon/HeroCoupon";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightCoupon from "@/components/MyCoupon/RightCoupon";

function MyCoupon() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroCoupon />
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
                <RightCoupon />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyCoupon;
