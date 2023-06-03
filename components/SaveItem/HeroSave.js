import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroSave() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Saved Items</h1>
        <p className={Styles.colrgreen}>Home / Saved Items </p>
      </div>
    </div>
  );
}

export default HeroSave;
