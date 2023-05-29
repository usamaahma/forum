import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroViewed() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Recently Viewed</h1>
        <p className={Styles.colrgreen}>Home / Recently Viewed</p>
      </div>
    </div>
  );
}

export default HeroViewed;
