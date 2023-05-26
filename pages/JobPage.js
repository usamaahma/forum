import React,{useState} from "react";
import Styles from "../styles/DeshiServicePage.module.css";
import { Row, Col,Drawer } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionJob from "@/components/Job/HeroSectionJob";
import LeftSectionJob from "@/components/Job/LeftSectionJob";
import RightSectionJob from "@/components/Job/RightSectionJob";
import ImageOfJob from "@/components/Job/ImageOfJob";
import Drawerservice from "./Drawerservice";
function JobPage() {
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
      <HeroSectionJob />
      <ImageOfJob />
      <div>
        <Row justify="center">
          <Col>
          <Drawer placement="right" onClose={onClose} open={open}>
              <Drawerservice />
            </Drawer>
            <div className={`${Styles.centercoldeshi} ${Styles.displayyes}`}>
              <LeftSectionJob />
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
              <RightSectionJob />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default JobPage;
