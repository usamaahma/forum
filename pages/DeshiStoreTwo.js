import React from "react";
import Styles from "../styles/DeshiShopPageTwo.module.css";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import LeftSectiondeshiShop from "@/components/DeshiShopStore/LeftSectionDeshiStore";
import RightSectionofDeshiStoreTwo from "@/components/DeshiStoreTwo/RightSectionofDeshiStoreTwo";

function DeshiStoreTwo() {
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
              <RightSectionofDeshiStoreTwo />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiStoreTwo;
