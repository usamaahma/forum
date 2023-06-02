import React, { useState } from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col, Drawer } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import RightSectionOfBuy from "@/components/BuyAndSell/RightSectionOfBuy";
import LeftSectionOfBuy from "@/components/BuyAndSell/LeftSectionOfBuy";
import ImageSectionOfBuy from "@/components/BuyAndSell/ImageSectionOfBuy";
import HeroSectionOfBuy from "@/components/BuyAndSell/HeroSectionOfBuy";
import Drawerservice from "./Drawerservice";
function BuyAndSellPage() {
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
      <HeroSectionOfBuy />
      <ImageSectionOfBuy />
      <div>
        <Row justify="center">
          <Col>
          <Drawer placement="right" onClose={onClose} open={open}>
              <Drawerservice />
            </Drawer>
            <div className={`${Styles.centercoldeshi} ${Styles.displayyes}`}>
              <LeftSectionOfBuy />
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
              <RightSectionOfBuy />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BuyAndSellPage;
