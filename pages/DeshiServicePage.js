import React, { useState } from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col, Drawer } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionOfDeshiSer from "@/components/DeshiServices/HeroSectionOfDeshiSer";
import ImageSectionOfDeshi from "@/components/DeshiServices/ImageSectionOfDeshi";
import LeftSectionDeshi from "@/components/DeshiServices/LeftSectionDeshi";
import RightSectionDeshi from "@/components/DeshiServices/RightSectionDeshi";
import Drawerservice from "./Drawerservice";
function DeshiServicePage() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <MainHeader />
      <HeroSectionOfDeshiSer />
      <ImageSectionOfDeshi />
      <div>
        <Row justify="center">
          <Col>
            <Drawer placement="right" onClose={onClose} open={open}>
              <Drawerservice />
            </Drawer>
            <div className={`${Styles.centercoldeshi} ${Styles.displayyes}`}>
              <LeftSectionDeshi />
            </div>
            <div className={Styles.nodisplay}>
              <img
                alt="abc"
                src="../images/Category.png"
                onClick={showDrawer}
              />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercoldeshi1}>
              <RightSectionDeshi />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiServicePage;
