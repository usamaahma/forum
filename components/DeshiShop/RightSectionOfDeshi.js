import React from "react";
import Styles from "../../styles/RightSectionOfDeshi.module.css";
import { Col, Row } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Bg from "../../public/images/image 68.png";
import Decor from "../../public/images/image 66.png";
import Decor1 from "../../public/images/image 67.png";
import Greebar from "../../public/images/Rectangle 4646.png";
import Image from "next/image";
function RightSectionOfDeshi() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.center}>
              <div className={Styles.width}>
                <Carousel
                  infiniteLoop
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  autoPlay={true}
                >
                  <div className={Styles.center}>
                    <Image src={Bg} alt="" className={Styles.imgbg} />
                  </div>
                  <div className={Styles.center}>
                    <Image src={Bg} alt="" className={Styles.imgbg} />
                  </div>
                  <div className={Styles.center}>
                    <Image src={Bg} alt="" className={Styles.imgbg} />
                  </div>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.center1}>
              <Image className={Styles.imgbg1} src={Decor} alt="abc" />
              <Image className={Styles.imgbg1} src={Decor1} alt="abc" />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.bardiv}>
        <Image src={Greebar} alt="abc" />
        <p className={Styles.smlltext}>
          Wrap new offers / gift every signle day on Weekends - New Coupon Code:
          Haapy2023
        </p>
        <button className={Styles.btngreen}>Get Coupon</button>
      </div>
    </div>
  );
}

export default RightSectionOfDeshi;
