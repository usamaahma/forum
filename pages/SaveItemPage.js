import React, { useState } from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col, Button, Drawer } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import RightSave from "@/components/SaveItem/RightSave";
import HeroSave from "@/components/SaveItem/HeroSave";
import LastDrawer from "./LastDrawer";
function SaveItemPage() {
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
        <HeroSave />
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
