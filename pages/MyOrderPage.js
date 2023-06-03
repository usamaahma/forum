import React, { useState } from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import HeroMyOrder from "@/components/MyOrder/HeroMyOrder";
import Footer from "@/components/common/footer";
import { Button, Col, Row, Drawer } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightOrder from "@/components/MyOrder/RightOrder";
import LastDrawer from "./LastDrawer";
function MyOrderPage() {
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
        <HeroMyOrder />
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
                <RightOrder />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyOrderPage;
