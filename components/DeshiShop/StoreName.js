import React from "react";
import Styles from "../../styles/StoreName.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Vector from "../../public/images/image 72.png";
import Vector1 from "../../public/images/image 75.png";
import Vector2 from "../../public/images/image 72 (1).png";
import Vector3 from "../../public/images/image 75 (1).png";
import Vector4 from "../../public/images/image 72 (2).png";
import Vector5 from "../../public/images/image 75 (2).png";
import Vector6 from "../../public/images/image 75 (3).png";
import Vector33 from "../../public/images/com.png";
import Image from "next/image";
import Link from "next/link";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <Link key={1} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector} alt="" />
        <p className={Styles.shoptext}>Devon Lane</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={2} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector1} alt="" />
        <p className={Styles.shoptext}>Guy Hawkins</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={3} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector2} alt="" />
        <p className={Styles.shoptext}>Jane Cooper</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={4} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector3} alt="" />
        <p className={Styles.shoptext}>Darlene Robertson</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={5} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector4} alt="" />
        <p className={Styles.shoptext}>Devon Lane</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={6} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector5} alt="" />
        <p className={Styles.shoptext}>Jacob Jones</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={7} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector33} alt="" />
        <p className={Styles.shoptext}>Jacob Jones</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={8} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Jacob Jones</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={9} href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Jacob Jones</p>
      </div>
    </div>{" "}
  </Link>,
];

const responsive = {
  0: { items: 3 },
  768: { items: 4 },
  1024: { items: 5 },
  1440: { items: 7 },
  2560: { items: 7 },
};
function StoreName() {
  return (
    <div className={Styles.centercaro}>
      <div className={Styles.textdiv}>
        <h3>Popular Store Name</h3>
        <div className={Styles.greenline}></div>
      </div>
      <hr className={Styles.hrline} />
      <div className={Styles.carodiv}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          // disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={2000}
          disableAutoPlayOnAction={false}
        />
      </div>
    </div>
  );
}

export default StoreName;
