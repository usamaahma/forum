import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BlogCard from "../Blog/BlogCard";
import Styles from "../../styles/BlogRightSection.module.css";
import Image from "next/image";
import Rectangle from "../../public/images/Rectangle 75.png";
import Like from "../../public/images/Like1.png";
import Share from "../../public/images/Share1.png";
import Comment from "../../public/images/Comment1.png";
import SmallBlogCard from "./SmallBlogCard";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <BlogCard />
  </div>,
  <div
    key={4}
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
        controlsStrategy="alternate"
        disableDotsControls
        autoPlay
      />
    </div>
  );
}

export default BlogCarousel;
