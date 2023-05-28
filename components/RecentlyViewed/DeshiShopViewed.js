import React from "react";
import Styles from "../../styles/DeshiShopViewed.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import ProductViewCard from "./ProductViewCard";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  375: { items: 1 },
  425: { items: 2 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 3 },
  1440: { items: 4 },
  2560: { items: 4 },
};
function DeshiShopViewed() {
  return (
    <div>
      <div className={Styles.divcenter}></div>
      <br />
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h2>Products</h2>
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
                    <ProductViewCard />
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
      </div>
    </div>
  );
}

export default DeshiShopViewed;
