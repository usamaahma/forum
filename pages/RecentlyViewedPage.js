import React from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import HeroViewed from "@/components/RecentlyViewed/HeroViewed";
import { Row, Col } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import RightViewed from "@/components/RecentlyViewed/RightViewed";
function RecentlyViewedPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroViewed />
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
                <RightViewed />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RecentlyViewedPage;
