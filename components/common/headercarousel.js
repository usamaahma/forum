import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Styles from "../../styles/Header.module.css";
import { Button } from "antd";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>Home</Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Deshi Shop
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Deshi Service
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Buy & Sell{" "}
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Rental
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>Job</Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>News</Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Event
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>
      Forum
    </Button>
  </div>,
  <div
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Button style={{ color: "black", borderColor: "transparent" }}>Blog</Button>
  </div>,
];
const responsive = {
  320: {
    items: 3,
  },
  375: {
    items: 4,
  },
  768: {
    items: 6,
  },
};
function HeaderCarousel() {
  return (
    <div className={Styles.showheader}>
      {" "}
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
      />
    </div>
  );
}

export default HeaderCarousel;
