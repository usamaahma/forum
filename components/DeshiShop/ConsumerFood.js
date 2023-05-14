import React from "react";
import Styles from "../../styles/ConsumerFood.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import FruitVageProductCard from "./FruitVageProductCard";
import Post from "../../public/images/image 77.png";
import Image from "next/image";
import TabOfFood from "./TabOfFood";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};
function ConsumerFood() {
  return (
    <div>
      <div className={Styles.centercaro}>
        {/* <div className={Styles.textdiv}>
          <h3>Consumer Food</h3>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} /> */}
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div className={Styles.centercaro}>
                  <div
                    key={index}
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <FruitVageProductCard />
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
        <div>
          <Image src={Post} alt="" className={Styles.postsize} />
        </div>
      </div>
    </div>
  );
}

export default ConsumerFood;
