import React from "react";
import Styles from "../../styles/CarouselDeshiService.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import Link from "next/link";
import JobDetailCard from "./JobDetailCard";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  320: { items: 1 },
  375: { items: 2 },
  425: { items: 2 },
  568: { items: 3 },
  1024: { items: 3 },
  1440: { items: 4 },
  2560: { items: 4 },
};
function CarouselJobDetail() {
  return (
    <div>
      <div>
        <h3>Related Service</h3>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "6rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr className={Styles.line} />
        <br />
      </div>
      <div className={Styles.carodiv}>
        <AliceCarousel
          mouseTracking
          items={detail.map((index) => (
            <div className={Styles.centercaro} key={index}>
              <div
                onDragStart={handleDragStart}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <JobDetailCard />
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

export default CarouselJobDetail;
