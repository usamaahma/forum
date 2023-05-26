import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroMyAccount() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>My Account</h1>
        <p className={Styles.colrgreen}>Home / Login - Register</p>
      </div>
    </div>
  );
}

export default HeroMyAccount;
