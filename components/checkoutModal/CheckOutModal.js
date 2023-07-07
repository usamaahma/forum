import React from "react";
import Styles from "../../styles/CheckOutModal.module.css";
import Product from "../../public/images/checkpro.png";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
const data = [
  {
    id: 1,
    image: <Image src={Product} alt="" />,
    price: "$400",
    detail: "Cotton Boutique’s Long with long chain..",
  },
  {
    id: 2,
    image: <Image src={Product} alt="" />,
    price: "$400",
    detail: "Cotton Boutique’s Long with long chain..",
  },
  {
    id: 3,
    image: <Image src={Product} alt="" />,
    price: "$400",
    detail: "Cotton Boutique’s Long with long chain..",
  },
];
function CheckOutModal() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div className={Styles.boxx}>
            {item.image}
            <div>
              <p className={Styles.text}>{item.detail}</p>
              <div className={Styles.flexboxx}>
                <div className={Styles.flexbtn}>
                  <button className={Styles.addbtn}>-</button>
                  <p>1</p>
                  <button className={Styles.addbtn}>+</button>
                </div>
                <p className={Styles.price}>{item.price}</p>
              </div>
            </div>
            <CloseOutlined />
          </div>
          <hr style={{ border: "#E8E8E8 solid 1px" }} />
        </div>
      ))}
      <div className={Styles.flexboxx1}>
        <p className={Styles.subtext}>Subtotal:</p>
        <p className={Styles.subtext1}>$1200</p>
      </div>
      <p className={Styles.order}>Your order qualify for free shipping!</p>
      <hr style={{ border: "solid 1px #42B00F" }} />
      <div className={Styles.flexboxx12}>
        <Link href="/ProceedOfOrderPage">
          <button className={Styles.checkbtn1}>View Cart</button>
        </Link>
        <button className={Styles.checkbtn}>Checkout</button>
      </div>
    </div>
  );
}

export default CheckOutModal;
