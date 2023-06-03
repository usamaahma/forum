import React, { useState } from "react";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import HeroViewed from "@/components/RecentlyViewed/HeroViewed";
<<<<<<< HEAD
import { Row, Col, Button } from "antd";
=======
import { Row, Col ,Button,Drawer} from "antd";
>>>>>>> 11fdfbbfd9f7acbfa1dd900f6a76fabae32bf78d
import LeftOrder from "@/components/MyOrder/LeftOrder";
import Styles from "../styles/MyOrderPage.module.css";
import RightViewed from "@/components/RecentlyViewed/RightViewed";
import LastDrawer from "./LastDrawer";
function RecentlyViewedPage() {
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
        <HeroViewed />
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
                <RightViewed />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RecentlyViewedPage;
