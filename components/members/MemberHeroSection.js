import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function MemberHeroSection() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Members</h1>
        <p className={Styles.colrgreen}>Home / Network / Members</p>
      </div>
    </div>
  );
}

export default MemberHeroSection;
