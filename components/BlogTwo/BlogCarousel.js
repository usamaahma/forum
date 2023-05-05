import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BlogCard from "../Blog/BlogCard";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
function BlogCarousel() {
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

export default BlogCarousel;
