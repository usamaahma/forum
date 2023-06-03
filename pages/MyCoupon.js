import React, { useState } from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "../components/common/mainHeader";
import Footer from "../components/common/footer";
import { Col, Row, Button, Drawer } from "antd";
import HeroCoupon from "@/components/MyCoupon/HeroCoupon";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightCoupon from "@/components/MyCoupon/RightCoupon";
import LastDrawer from "./LastDrawer";
import Coupon from "@/components/SellerRoom/Coupon";

function MyCoupon() {
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
        <HeroCoupon />
        <br />
        <br />
        <div>
          <div className={Styles.drawer}>
            <Button onClick={showDrawer} className={Styles.btnnn}>
              <img alt="abc" src="../images/Frame 44157.png" />
            </Button>

            <Drawer
              title="Basic Drawer"
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
                <Coupon />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyCoupon;
