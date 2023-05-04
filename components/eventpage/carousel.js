import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  {
    id: 1,
    image: (
      <img
        src="../images/bengali.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    ),
  },
  {
    id: 2,
    image: (
      <img
        src="../images/bengali.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    ),
  },
  {
    id: 3,
    image: (
      <img
        src="../images/bengali.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    ),
  },
];

function Carousel() {
  return (
    <div>
      {" "}
      <AliceCarousel mouseTracking items={items.map((item) => item.image)} />
    </div>
  );
}

export default Carousel;
