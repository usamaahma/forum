import React from "react";
import Styles from "../../styles/ShopByCategory.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Vector from "../../public/images/Vector (1).png";
import Vector1 from "../../public/images/Vector (2).png";
import Vector2 from "../../public/images/Vector (4).png";
import Vector3 from "../../public/images/Vector (5).png";
import Vector4 from "../../public/images/Vector (6).png";
import Vector5 from "../../public/images/Vector (7).png";
import Vector6 from "../../public/images/Vector (8).png";
import Vector33 from "../../public/images/com.png";
import Image from "next/image";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector1} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector2} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector3} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={5}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector4} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={6}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector5} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={7}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector33} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={8}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector6} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={9}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector6} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={10}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector6} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={11}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector6} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
  <div
    key={12}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div className={Styles.boxstyle}>
      <Image src={Vector} alt="" />
      <p>Men Clothing</p>
    </div>
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 6 },
  1440: { items: 10 },
  2560: { items: 10 },
};
function ShopByCategory() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.textdiv}>
        <h3>Shop By Category</h3>
        <div className={Styles.greenline}></div>
      </div>
      <hr className={Styles.hrline} />
      <div className={Styles.carodiv}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          disableAutoPlayOnAction={false}
        />
      </div>
    </div>
  );
}

export default ShopByCategory;
