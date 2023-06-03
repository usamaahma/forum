import React from "react";
import Styles from "../../styles/ProductReview.module.css";
import { Rate, Dropdown } from "antd";
import { DashOutlined } from "@ant-design/icons";
import Product from "../../public/images/image 65.png";
import Image from "next/image";
const items = [
  {
    label: <a className={Styles.edit}>Edit</a>,
    key: "0",
  },
  {
    label: <a className={Styles.edit}>Delete</a>,
    key: "1",
  },
];
const data = [{ name: "produdct" }, { name: "produdct" }, { name: "produdct" }];
function ProductReview() {
  return (
    <div>
      <div className={Styles.mainReview}>
        {data.map((index) => (
          <div key={index}>
            <div className={Styles.smllprodiv}>
              <Rate />
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <p onClick={(e) => e.preventDefault()}>
                  <DashOutlined />
                </p>
              </Dropdown>
            </div>
            <div className={Styles.padding}>
              <p className={Styles.goodtext}>Good Product </p>
              <p className={Styles.longtext}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layoIt is
                a long established
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
            <hr className={Styles.line} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReview;
