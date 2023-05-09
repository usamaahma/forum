import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cardeventcar from "./cardeventcar";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Cardeventcar />
  </div>,
  <div
    key={5}
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
  558: {
    items: 2,
  },
  1024: {
    items: 2,
  },
  1440: {
    items: 3,
  },
  2560: {
    items: 3,
  },
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
