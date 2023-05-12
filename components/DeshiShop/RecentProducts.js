import React from "react";
import Styles from "../../styles/RecentProducts.module.css";
import Image from "next/image";
import Banner from "../../public/images/Rectangle 4650.png";
import BannerOne from "../../public/images/Rectangle 4651.png";
import BannerTwo from "../../public/images/Rectangle 4656.png";
import BannerThree from "../../public/images/Rectangle 4657.png";
import BannerFour from "../../public/images/Rectangle 4653.png";
import BannerFive from "../../public/images/Rectangle 4654.png";
import BannerSix from "../../public/images/Rectangle 4655.png";
import { Row, Col } from "antd";
function RecentProducts() {
  return (
    <div>
      <div className={Styles.divcenter}>
        <div className={Styles.divimge}>
          <div>
            <Image className={Styles.imgbanner} src={Banner} alt="" />
          </div>
          <div>
            <Image className={Styles.imgbanner} src={BannerOne} alt="" />
          </div>
        </div>
      </div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.divcenter}>
              <Image src={BannerTwo} alt="" />
              <Image src={BannerThree} alt="" />
            </div>
          </Col>
          <Col>
            <div className={Styles.divcenter}>
              <Image src={BannerFour} alt="" />
            </div>
          </Col>
          <Col>
            <div className={Styles.divcenter}>
              <Image src={BannerFive} alt="" />
              <Image src={BannerSix} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RecentProducts;
