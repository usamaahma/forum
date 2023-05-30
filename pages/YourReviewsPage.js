import React from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import HeroReview from "@/components/YourReviewes/HeroReview";
import RightReview from "@/components/YourReviewes/RightReview";
function YourReviewsPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroReview />
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
                <RightReview />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default YourReviewsPage;
