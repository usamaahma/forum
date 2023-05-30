import React from "react";
import Styles from "../../styles/ProductReview.module.css";
import { Rate } from "antd";
import { DashOutlined } from "@ant-design/icons";
import Product from "../../public/images/image 65.png";
import Image from "next/image";
function ProductReview() {
  return (
    <div>
      <div className={Styles.mainReview}>
        <div className={Styles.smllprodiv}>
          <Rate />
          <DashOutlined />
        </div>
        <div className={Styles.padding}>
          <p className={Styles.goodtext}>Good Product </p>
          <p className={Styles.longtext}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layoIt is a long
            established
          </p>
          <div className={Styles.divflexbox}>
            <Image src={Product} alt="" className={Styles.imgsize} />
            <div className={Styles.marleft}>
              <p className={Styles.shoptext}>Shop Name</p>
              <p className={Styles.protext}>Product Name</p>
              <div className={Styles.divbox}>
                <p className={Styles.pricetext}>$50.99</p>
                <p className={Styles.gretext}>$50.99</p>
                <p className={Styles.soldtext}>30+ sold</p>
              </div>
              <div className={Styles.divbox}>
                <Rate className={Styles.startext} />
                <p className={Styles.soldtext}>(30 review)</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ProductReview;
