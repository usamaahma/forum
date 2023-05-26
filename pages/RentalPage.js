import React, { useState } from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col, Drawer } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import ImageOfRental from "@/components/Rental/ImageOfRental";
import LeftSectionRental from "@/components/Rental/LeftSectionRental";
import RightSectionRental from "@/components/Rental/RightSectionRental";
import HeroSectionRental from "@/components/Rental/HeroSectionRental";
import Drawerservice from "./Drawerservice";
function RentalPage() {
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
      <HeroSectionRental />
      <ImageOfRental />
      <div>
        <Row justify="center">
          <Col>
            <Drawer placement="right" onClose={onClose} open={open}>
              <Drawerservice />
            </Drawer>
            <div className={`${Styles.centercoldeshi} ${Styles.displayyes}`}>
              <LeftSectionRental />
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
              <RightSectionRental />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default RentalPage;
