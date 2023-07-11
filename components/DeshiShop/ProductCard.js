import React, { useState } from "react";
import Styles from "../../styles/ProductCard.module.css";
import Product from "../../public/images/image 65.png";
import Vector from "../../public/images/store.png";
import { Card, Rate } from "antd";
import Image from "next/image";
import { addToCart } from "../../redux/cart";
import { useDispatch, useSelector } from "react-redux";

const { Meta } = Card;
function ProductCard() {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const { totalCartItems } = useSelector((state) => state.cart);

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
          cover={
            <Image
              src={Product}
              alt="abc"
              style={{ backgroundColor: "#F8F8F8" }}
            />
          }
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
            <Image
              src={Vector}
              alt="abc"
              className={Styles.border}
              onClick={() => {
                dispatch(
                  addToCart({
                    id: 1,
                    name: "product",
                    price: "$50.59",
                  })
                );
              }}
            />
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

export default ProductCard;
