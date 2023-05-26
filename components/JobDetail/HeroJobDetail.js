import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroJobDetail() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Job Details</h1>
        <p className={Styles.colrgreen}>Home / Job details </p>
      </div>
    </div>
  );
}

export default HeroJobDetail;
