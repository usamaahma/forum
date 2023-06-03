import React,{useState} from "react";
import Styles from "../styles/MyProfilePage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import { Col, Row,Button,Drawer } from "antd";
import LeftOrder from "@/components/MyOrder/LeftOrder";
import HeroProfile from "@/components/YourProfile/HeroProfile";
import RightProfile from "@/components/YourProfile/RightProfile";
import LastDrawer from "./LastDrawer";
function MyProfilePage() {
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
        <HeroProfile />
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
                <RightProfile />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyProfilePage;
