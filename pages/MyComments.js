import React,{useState} from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row ,Button,Drawer} from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
// import RightOrder from "@/components/MyOrder/RightOrder";
import HeroMyComments from "@/components/MyComments/HeroComments";
import RightComments from "@/components/MyComments/RightComments";
import LastDrawer from "./LastDrawer";

function MyComments() {
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
        <HeroMyComments />
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
                <RightComments />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyComments;
