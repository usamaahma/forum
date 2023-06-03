import React, { useState } from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import { Row, Col } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import HeroReview from "@/components/YourReviewes/HeroReview";
import RightReview from "@/components/YourReviewes/RightReview";
import LastDrawer from "./LastDrawer";
function YourReviewsPage() {
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
        <HeroReview />
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
                <RightReview />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default YourReviewsPage;
