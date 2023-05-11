import { Row, Col } from "antd";
import React from "react";
import Styles from "../styles/DeshiShopPage.module.css";
import LeftSectionOfDeshi from "@/components/DeshiShop/LeftSectionOfDeshi";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import RightSectionOfDeshi from "@/components/DeshiShop/RightSectionOfDeshi";

function DeshiShopPage() {
  return (
    <div>
      <MainHeader />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerCol}>
              <LeftSectionOfDeshi />
            </div>
          </Col>
          <Col>
            <div className={Styles.centerCol12}>
              <RightSectionOfDeshi />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiShopPage;
