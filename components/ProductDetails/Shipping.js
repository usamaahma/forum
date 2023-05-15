import React from "react";
import Styles from "../../styles/Shipping.module.css";
import Image from "next/image";
import Van from "../../public/images/Van.png";
function Shipping() {
  return (
    <div className={Styles.mainship}>
      <div className={Styles.padding}>
        <div className={Styles.flex}>
          <Image src={Van} alt="" />
          <p className={Styles.shiptext}>Shipping</p>
        </div>
        <p className={Styles.standtext}>Standard: Free on all orders</p>
        <p className={Styles.standtext}>Courier company: Fed Ex</p>
        <p className={Styles.standtext}>
          Delivery Estimate Time: 2 Jan, 2023 11.00am
        </p>
      </div>
      <hr className={Styles.line} />
      <div className={Styles.padding}>
        <p className={Styles.standtext}>Free Returns with 70 Days</p>
        <p className={Styles.standtext}>Cash on Delivery Availabe</p>
      </div>
    </div>
  );
}

export default Shipping;
