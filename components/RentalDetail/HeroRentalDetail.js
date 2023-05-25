import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroRentalDetail() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Rental Details</h1>
        <p className={Styles.colrgreen}>Home / Rental details </p>
      </div>
    </div>
  );
}

export default HeroRentalDetail;
