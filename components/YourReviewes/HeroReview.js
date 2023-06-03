import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroReview() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Reviews</h1>
        <p className={Styles.colrgreen}>Home / reviews</p>
      </div>
    </div>
  );
}

export default HeroReview;
