import React, { useState } from "react";
import Styles from "../../styles/ProductCardTwo.module.css";
import Product from "../../public/images/image 65.png";
import Vector from "../../public/images/Vector.png";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function ProductCardtwo() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <div>
        <Card
          hoverable
          className={`${Styles.card} ${Styles.hoverContainer}`}
          cover={<Image src={Product} alt="abc" />}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${Styles.cardhover} ${hovered ? Styles.show : ""}`}>
            <img
              className={Styles.imghvr}
              alt="abc"
              src="../images/hoverone.png"
            />
            <img
              className={Styles.imghvr}
              alt="abc"
              src="../images/hovertwo.png"
            />
            <img
              className={Styles.imghvr}
              alt="abc"
              src="../images/hoverthree.png"
            />
            <img
              className={Styles.imghvrr}
              alt="abc"
              src="../images/hoverfour.png"
            />
          </div>
          <div className={Styles.anotherhover}>
            <button className={Styles.btnhover}>
              <img alt="abc" src="../images/whitecart.png" />
              <p>Add To Cart</p>
            </button>
          </div>
          <p className={Styles.pronam}>Product Name</p>
          <div className={Styles.price}>
            <p className={Styles.pricetext}>$50.99</p>
            <p className={Styles.greenprrice}>$50.99</p>
            <p className={Styles.soldtext}>30+ sold</p>
            <Image src={Vector} alt="abc" className={Styles.border} />
          </div>
          <div className={Styles.stardiv}>
            <Rate allowHalf defaultValue={2.5} className={Styles.star} />
            <p className={Styles.thre}>(30+)</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProductCardtwo;
