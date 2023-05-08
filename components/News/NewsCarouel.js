import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FeaturedPost from "./FeaturedPost";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={0}
    onDragStart={handleDragStart}
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <FeaturedPost />
  </div>,
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <FeaturedPost />
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <FeaturedPost />
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
  >
    <FeaturedPost />
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
    items: 4,
  },
};
function NewsCarousel() {
  return (
    <div>
      {" "}
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

export default NewsCarousel;
