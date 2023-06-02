import React from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import RightSave from "@/components/SaveItem/RightSave";
import HeroSave from "@/components/SaveItem/HeroSave";
function SaveItemPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSave />
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
                <RightSave />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SaveItemPage;
