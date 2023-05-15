import React from "react";
import Styles from "../../styles/ShopCate.module.css";
import ProductCard from "./ProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};
function PopularProducts() {
  return (
    <div>
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h3>Popular Products</h3>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
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
    </div>
  );
}

export default PopularProducts;
