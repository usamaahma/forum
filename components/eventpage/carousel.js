import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RecentBlog from "./RecentBlog";
import Cardeventcar from "./cardeventcar";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
];
const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 2,
  },
  // 1440: {
  //   items: 3,
  // },
};
function Carousel() {
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        disableAutoPlayOnAction={false}
      />
    </div>
  );
}

export default Carousel;
