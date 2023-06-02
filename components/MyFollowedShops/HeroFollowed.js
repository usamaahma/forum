import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroFollowed() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}> Followed Shops</h1>
        <p className={Styles.colrgreen}>Home / Followed Shops</p>
      </div>
    </div>
  );
}

export default HeroFollowed;
