import React from "react";
import Styles from "../../styles/ShopCate.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCardTwo from "./ProductCardTwo";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={5}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={6}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
  <div
    key={7}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ProductCardTwo />
  </div>,
];

const responsive = {
  0: { items: 1 },
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
              items={items}
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

export default PopularProductsTwo;
