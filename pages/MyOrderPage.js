import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import HeroMyOrder from "@/components/MyOrder/HeroMyOrder";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
function MyOrderPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroMyOrder />
        <div>
          <Row justify="center">
            <Col>
              <div className={Styles.centercolorder}>
                <LeftOrder />
              </div>
            </Col>
            <Col>
              <div className={Styles.centercolorder1}></div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyOrderPage;
