import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroSignUp() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Sign Up</h1>
        <p className={Styles.colrgreen}>Home / Sign up</p>
      </div>
    </div>
  );
}

export default HeroSignUp;
