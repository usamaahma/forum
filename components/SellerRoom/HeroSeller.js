import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroSeller() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Seller Room</h1>
        <p className={Styles.colrgreen}>Home / Seller Room</p>
      </div>
    </div>
  );
}

export default HeroSeller;
