import React from "react";
import Styles from "../../styles/CarouselRental.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import Link from "next/link";
import RentalCard from "./RentalCard";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  320: { items: 1 },
  375: { items: 2 },
  425: { items: 2 },
  568: { items: 2 },
  1024: { items: 2 },
  1440: { items: 3 },
  2560: { items: 3 },
};
function CarouselRental() {
  return (
    <div>
      <div className={Styles.carodiv}>
        <AliceCarousel
          mouseTracking
          items={detail.map((index) => (
            <div className={Styles.centercaro} key={index}>
              <div
                onDragStart={handleDragStart}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <RentalCard />
              </div>
            </div>
          ))}
          responsive={responsive}
          disableDotsControls
          autoPlay
          autoPlayInterval={2000}
          disableAutoPlayOnAction={false}
        />
      </div>
    </div>
  );
}

export default CarouselRental;
