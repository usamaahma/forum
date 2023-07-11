import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroLogin() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Login</h1>
        <p className={Styles.colrgreen}>Home / Login </p>
      </div>
    </div>
  );
}

export default HeroLogin;
