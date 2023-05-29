import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroMyComments() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}> Comments</h1>
        <p className={Styles.colrgreen}>Home / Comments</p>
      </div>
    </div>
  );
}

export default HeroMyComments;
