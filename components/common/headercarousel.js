import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Styles from "../../styles/Header.module.css";
import { Button } from "antd";
import Link from "next/link";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key="home"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="./HomePage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Home
      </Button>
    </Link>
  </div>,
  <div
    key="deshi-shop"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="/DeshiShopPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Deshi Shop
      </Button>
    </Link>
  </div>,
  <div
    key="deshi-service"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="./DeshiServicePage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Deshi Service
      </Button>
    </Link>
  </div>,
  <div
    key="buy-sell"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="./BuyAndSellPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Buy & Sell
      </Button>
    </Link>
  </div>,
  <div
    key="rental"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="./RentalPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Rental
      </Button>
    </Link>
  </div>,
  <div
    key="job"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="./JobPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Job
      </Button>
    </Link>
  </div>,
  <div
    key="news"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="/NewsPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        News
      </Button>
    </Link>
  </div>,
  <div
    key="event"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="/events">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Event
      </Button>
    </Link>
  </div>,
  <div
    key="forum"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="/landingPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Forum
      </Button>
    </Link>
  </div>,
  <div
    key="blog"
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <Link href="/BlogPage">
      <Button style={{ color: "black", borderColor: "transparent" }}>
        Blog
      </Button>
    </Link>
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
