import React from "react";
import Styles from "../../styles/ShopByCategory.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Vector from "../../public/images/Vector (1).png";
import Vector1 from "../../public/images/Vector (2).png";
import Vector2 from "../../public/images/Vector (4).png";
import Vector3 from "../../public/images/Vector (5).png";
import Vector4 from "../../public/images/Vector (6).png";
import Vector5 from "../../public/images/Group (3).png";
import Vector6 from "../../public/images/Vector (8).png";
import Vector33 from "../../public/images/com.png";
import Image from "next/image";
import Link from "next/link";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <Link key={1} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector} alt="" />
        <p className={Styles.shoptext}>Men Clothing</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={2} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector1} alt="" />
        <p className={Styles.shoptext}>Women’s Clothing</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={3} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector2} alt="" />
        <p className={Styles.shoptext}>Sunglass & Eyewear</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={4} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector3} alt="" />
        <p className={Styles.shoptext}>T-shirts</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={5} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector4} alt="" />
        <p className={Styles.shoptext}>Jesrcy</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={6} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector5} alt="" />
        <p className={Styles.shoptext}>Security System</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={7} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector33} alt="" />
        <p className={Styles.shoptext}>Television</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={8} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Toys and Games</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={9} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Toys and Games</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={10} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Toys and Games</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={11} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Toys and Games</p>
      </div>
    </div>{" "}
  </Link>,
  <Link key={12} href="/DeshiShopPageTwo" style={{ textDecoration: "none" }}>
    <div
      onDragStart={handleDragStart}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={Styles.boxstyle}>
        <Image src={Vector6} alt="" />
        <p className={Styles.shoptext}>Toys and Games</p>
      </div>
    </div>{" "}
  </Link>,
];

const responsive = {
  0: { items: 3 },
  768: { items: 4 },
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
          disableDotsControls
          autoPlay
          autoPlayInterval={2000}
          disableAutoPlayOnAction={false}
        />
      </div>
    </div>
  );
}

export default ShopByCategory;
