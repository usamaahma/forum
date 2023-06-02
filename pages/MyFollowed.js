import React from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import HeroFollowed from "@/components/MyFollowedShops/HeroFollowed";
import RightFollowed from "@/components/MyFollowedShops/RightFollowed";
function MyFollowedPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroFollowed />
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
                <RightFollowed />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyFollowedPage;
