import React from "react";
import Styles from "../styles/DeshiShopPageTwo.module.css";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import RightSectionDeshiStore from "@/components/DeshiShopStore/RightSectionDeshiStore";
import LeftSectiondeshiShop from "@/components/DeshiShopStore/LeftSectionDeshiStore";

function DeshiShopPageTwo() {
  return (
    <div>
      <MainHeader />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerCol}>
              <LeftSectiondeshiShop />
            </div>
          </Col>
          <Col>
            <div className={Styles.centerCol12}>
              {" "}
              <RightSectionDeshiStore />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiShopPageTwo;
