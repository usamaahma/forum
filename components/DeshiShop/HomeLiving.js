import React from "react";
import Styles from "../../styles/HomeLiving.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import HomeProduct from "./HomeProduct";
import { Col, Row, Card, Rate } from "antd";
import Image from "next/image";
import Product from "../../public/images/Frame 44777.png";
import Vector from "../../public/images/store.png";

const { Meta } = Card;
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  375: { items: 1 },
  425: { items: 2 },
  568: { items: 2 },
  1024: { items: 2 },
  1440: { items: 3 },
  2560: { items: 3 },
};
function HomeLiving() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col xxl={14} xl={14} lg={14} md={11} className={Styles.divdiv1}>
            <Row justify="center">
              <Col>
                <div className={Styles.centercaro}>
                  <div className={Styles.carodiv}>
                    <AliceCarousel
                      mouseTracking
                      items={detail.map((index) => (
                        <div key={index} className={Styles.centercaro}>
                          <div
                            onDragStart={handleDragStart}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <HomeProduct />
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
              </Col>
              <Col xxl={10} xl={10} lg={10} md={10}>
                <div className={Styles.centercaro}>
                  <div className={Styles.carodiv}>
                    <AliceCarousel
                      mouseTracking
                      items={detail.map((index) => (
                        <div key={index} className={Styles.centercaro}>
                          <div
                            onDragStart={handleDragStart}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <HomeProduct />
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
              </Col>
            </Row>
          </Col>
          <Col>
            <div className={Styles.divdiv}>
              <Card
                hoverable
                className={Styles.card}
                cover={<Image src={Product} alt="abc" className={Styles.img} />}
              >
                <p className={Styles.pronam}>Product Name</p>

                <div className={Styles.price}>
                  <Image src={Vector} alt="abc" className={Styles.border} />
                  <p className={Styles.soldtext}>30+ sold</p>
                  <p className={Styles.greenprrice}>$50.99</p>
                  <p className={Styles.pricetext}>$50.99</p>
                </div>
                <div className={Styles.stardiv}>
                  <p className={Styles.thre}>(30+)</p>
                  <Rate allowHalf defaultValue={2.5} className={Styles.star} />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomeLiving;
