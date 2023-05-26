import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroMyOrder() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Your Orders</h1>
        <p className={Styles.colrgreen}>Home / Your Orders</p>
      </div>
    </div>
  );
}

export default HeroMyOrder;
