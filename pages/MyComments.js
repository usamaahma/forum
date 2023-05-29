import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightOrder from "@/components/MyOrder/RightOrder";
import HeroMyComments from "@/components/MyComments/HeroComments";
import RightComments from "@/components/MyComments/RightComments";

function MyComments() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroMyComments />
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
                <RightComments />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyComments;
