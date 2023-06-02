import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightListing from "@/components/MyListing/RightListing";
import HeroListing from "@/components/MyListing/HeroListing";

function MyListing() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroListing />
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
                <RightListing />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyListing;
