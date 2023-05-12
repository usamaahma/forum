import React from "react";
import Styles from "../../styles/ProductCardTwo.module.css";
import Product from "../../public/images/image 65.png";
import Vector from "../../public/images/Vector.png";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function ProductCardtwo() {
  return (
    <div>
      <div>
        <Card
          hoverable
          className={Styles.cardtwo}
          cover={<Image src={Product} alt="abc" />}
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

export default ProductCardtwo;
