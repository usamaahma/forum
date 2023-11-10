import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FeaturedPost from "./FeaturedPost";
import Styles from "../../styles/FeaturedPost.module.css";
import { useRouter } from "next/router";

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
    items: 3,
  },
};
function NewsCarousel({ data, selectedCategory }) {
  const router = useRouter();
  return (
    <div>
      {" "}
      <AliceCarousel
        mouseTracking
        items={data
          ?.filter((item) =>
            selectedCategory ? item.newsCategoryId === selectedCategory : true
          )
          .map((item, index) => (
            <div
              key={index}
              onDragStart={handleDragStart}
              className={Styles.boxsmall}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/NewsPageTwo?NewslId=${item.id}`)}
            >
              <img className={Styles.img} src={item?.image?.[0]} alt="abc" />
              <div className={Styles.padding}>
                <div className={Styles.boxflex}>
                  <button className={Styles.btn}>{item.newsCategoryId} </button>
                  <p className={Styles.smalltext}>22 Jan, 2023</p>
                </div>
                <p className={Styles.textin}>{item.heading} </p>
              </div>
            </div>
          ))}
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
