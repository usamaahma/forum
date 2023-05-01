import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function NewsHeroSection() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>News</h1>
        <p className={Styles.colrgreen}>Home / Network / Forum</p>
      </div>
    </div>
  );
}

export default NewsHeroSection;
