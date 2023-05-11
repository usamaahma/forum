import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];
const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
};

const Gallery = () => {
  return <AliceCarousel responsive={responsive} mouseTracking items={items} />;
};
export default Gallery;
