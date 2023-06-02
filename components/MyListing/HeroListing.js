import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroListing() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}> Your Listing</h1>
        <p className={Styles.colrgreen}>Home / Listing</p>
      </div>
    </div>
  );
}

export default HeroListing;
