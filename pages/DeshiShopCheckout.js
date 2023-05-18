import React from "react";
import Styles from "../styles/DeshiShopPageTwo.module.css";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";

import LeftSectionCheckout from "@/components/DeshiCheckout/LeftSectionCheckout";
import RightSectioncheckout from "@/components/DeshiCheckout/RightSectioncheckout";

function DeshiShopCheckout() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerCol}>
              <LeftSectionCheckout />
            </div>
          </Col>
          <Col>
            <div className={Styles.centerCol12}>
              <RightSectioncheckout />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DeshiShopCheckout;
