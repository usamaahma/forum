import React from "react";
import Styles from "../../styles/ShopCate.module.css";
import ProductCard from "./ProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  320: { items: 1 },
  375: { items: 2 },
  425: { items: 2 },
  568: { items: 2 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};
function PopularProductsTwo() {
  return (
    <div>
      <div className={Styles.centercaro}>
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div className={Styles.centercaro} key={index}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProductCard />
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

export default PopularProductsTwo;
