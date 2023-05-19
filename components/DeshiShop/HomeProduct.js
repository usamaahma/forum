import React from "react";
import Styles from "../../styles/ProductCard.module.css";
import Product from "../../public/images/Frame 44707.png";
import Vector from "../../public/images/store.png";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function HomeProduct() {
  return (
    <div>
      <div>
        <Card
          hoverable
          className={Styles.card}
          cover={
            <Image
              src={Product}
              alt="abc"
              style={{ backgroundColor: "#F8F8F8" }}
            />
          }
        >
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

export default HomeProduct;
