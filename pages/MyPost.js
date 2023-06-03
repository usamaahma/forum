import React,{useState} from "react";
import Styles from "../styles/MyOrderPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row,Button,Drawer } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import RightPost from "@/components/MyPost/RightPost";
import HeroPost from "@/components/MyPost/Heropost";
import LastDrawer from "./LastDrawer";

function MyPost() {
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
        <HeroPost />
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
                <RightPost />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyPost;
