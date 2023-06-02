import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroCoupon() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}> Coupon</h1>
        <p className={Styles.colrgreen}>Home / Coupon</p>
      </div>
    </div>
  );
}

export default HeroCoupon;
