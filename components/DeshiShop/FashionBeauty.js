import React from "react";
import Styles from "../../styles/FashionBeauty.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import Post from "../../public/images/image 79.png";
import Image from "next/image";
import GlassesProducts from "./GlassesProducts";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  375: { items: 1 },
  425: { items: 2 },
  568: { items: 2 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};
function FashionBeauty() {
  return (
    <div>
      <div className={Styles.centercaro}>
        {/* <div className={Styles.textdiv}>
          <h3>Fashion & Beauty</h3>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} /> */}
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
                    <GlassesProducts />
                  </div>
                </div>
              ))}
              responsive={responsive}
              // disableButtonsControls
              disableDotsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
        {/* <div>
          <Image src={Post} alt="" className={Styles.postsize} />
        </div> */}
      </div>
    </div>
  );
}

export default FashionBeauty;
