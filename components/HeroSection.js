import React from "react";
import Styles from "../styles/HeroSection.module.css";
function HeroSection() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Forum</h1>
        <p className={Styles.colrgreen}>Home / Network / Forum</p>
      </div>
    </div>
  );
}

export default HeroSection;
