import React from "react";
import Styles from "../styles/MyProfilePage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import HeroProfile from "@/components/YourProfile/HeroProfile";
import RightProfile from "@/components/YourProfile/RightProfile";
function MyProfilePage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroProfile />
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
                <RightProfile />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyProfilePage;
