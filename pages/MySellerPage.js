import React, { useState } from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row, Button, Drawer } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import HeroSeller from "@/components/SellerRoom/HeroSeller";
import RightSeller from "@/components/SellerRoom/RighSeller";
import LastDrawer from "./LastDrawer";
function MySellerPage() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSeller />
        <br />
        <br />
        <div>
          <div className={Styles.drawer}>
            <Button onClick={showDrawer} className={Styles.btnnn}>
              <img alt="abc" src="../images/Frame 44157.png" />
            </Button>
            <Drawer
              placement="right"
              onClose={onClose}
              open={open}
            >
              <LastDrawer />
            </Drawer>
          </div>
          <Row justify="center">
            <Col>
              <div className={Styles.centercolorder}>
                <LeftOrder />
              </div>
            </Col>
            <Col>
              <div className={Styles.centercolorder1}>
                <RightSeller />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MySellerPage;
