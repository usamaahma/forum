import React from "react";
import Styles from "../styles/DeshiShopPageTwo.module.css";
import RightSectionDeshiTwo from "@/components/DeshiShopPageTwo/RightSectionDeshiTwo";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import LeftSectiondeshitwo from "@/components/DeshiShopPageTwo/LeftSectionDeshiTwo";

function DeshiShopPageTwo() {
  return (
    <div>
      <MainHeader />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerCol}>
              <LeftSectiondeshitwo />
            </div>
          </Col>
          <Col>
            <div className={Styles.centerCol12}>
              <RightSectionDeshiTwo />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiShopPageTwo;
