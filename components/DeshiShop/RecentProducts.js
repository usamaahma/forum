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
import ProductCard from "./ProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import RecentProductTwo from "./RecentProductTwo";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};
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
      <br />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.divcenter12}>
              <Image src={BannerTwo} className={Styles.banimg} alt="" />
              <Image src={BannerThree} className={Styles.banimg} alt="" />
            </div>
          </Col>
          <Col>
            <div className={Styles.divcenter}>
              <Image src={BannerFour} className={Styles.bnbigimg} alt="" />
            </div>
          </Col>
          <Col>
            <div className={Styles.divcenter124}>
              <Image src={BannerFive} className={Styles.banimg} alt="" />
              <Image src={BannerSix} className={Styles.banimg} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h3>Recent Products</h3>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div key={index} className={Styles.centercaro}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProductCard />
                  </div>
                </div>
              ))}
              responsive={responsive}
              disableButtonsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
      </div>
      <div>
        <RecentProductTwo />
      </div>
    </div>
  );
}

export default RecentProducts;
