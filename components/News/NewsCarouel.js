import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FeaturedPost from "./FeaturedPost";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <FeaturedPost />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <FeaturedPost />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <FeaturedPost />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <FeaturedPost />
  </div>,
];
const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
  },
  1440: {
    items: 3,
  },
};
function NewsCarousel() {
  return (
    <div>
      <AliceCarousel
        style={{ paddingLeft: "50rem", paddingRight: "50rem" }}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        autoPlay
      />
    </div>
  );
}

export default NewsCarousel;
