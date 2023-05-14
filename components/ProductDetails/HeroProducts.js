import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroProduct() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Product Details</h1>
        <p className={Styles.colrgreen}>Home / Seller Room</p>
      </div>
    </div>
  );
}

export default HeroProduct;
